import * as React from 'react'
import { SafeAreaView, ScrollView, View, Text, Image, Modal, Pressable, RefreshControl } from 'react-native'
import * as Progress from 'react-native-progress';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Feather } from '@expo/vector-icons';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles'
import { get_recordings } from '../../api/vehicle';
import { getUid, getVid } from '../../api/auth';
import configs from '../../assets/configs';

export const Recordings = ({ navigation }) => {

    const [refreshing, setRefreshing] = React.useState(false)
    const [videos, setVideos] = React.useState([])
    const [downloaded, setDownloaded] = React.useState(0)
    const [downloading, setDownloading] = React.useState(false)
    const vid = React.useRef(null)
    const uid = React.useRef(null)

    function formatTimestamp(timestamp) {
        // Create a new Date object from the timestamp
        var date = new Date(timestamp);

        // Get the date parts
        var day = date.getDate();
        var month = date.toLocaleString('default', { month: 'long' });
        var year = date.getFullYear();

        // Get the time parts
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';

        // Convert to 12-hour time
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;

        // Return the formatted date and time
        return { date: `${day} ${month}, ${year}`, time: `${hours}:${minutes} ${ampm}` };
    }

    const share = async (name) => {
        const fileName = name; // replace with your file's name
        const fileUri = FileSystem.documentDirectory + fileName;

        setDownloading(true)
        const downloadResumable = FileSystem.createDownloadResumable(
            `https://${configs.CDS_URL}/video/download/${vid.current}/${uid.current}/${name}`,
            fileUri,
            {},
            (progress) => {
                setDownloaded((progress.totalBytesWritten / progress.totalBytesExpectedToWrite * 100).toFixed(2))
            }
        );

        try {
            const { uri } = await downloadResumable.downloadAsync();
            setDownloading(false)

            // Check if sharing is possible
            if (!(await Sharing.isAvailableAsync())) {
                alert(`Uh oh, sharing isn't available on your platform`);
                return;
            }

            // Share the file
            await Sharing.shareAsync(uri);
            await FileSystem.deleteAsync(uri);
        } catch (e) {
            console.error(e);
        }
    };

    const Card = ({ video }) => {

        const { date, time } = formatTimestamp(video.timestamp);

        return <View style={styles.card}>
            <Pressable onPress={() => {
                navigation.navigate('Player', {
                    vid: vid.current,
                    uid: uid.current,
                    name: video.name
                })
            }} style={styles.top}>
                <Image
                    style={styles.thumbnail}
                    source={{
                        uri: `https://${configs.CDS_URL}/data/thumbnail/${vid.current}/${video.id}`,
                    }}
                />
                <View style={styles.play}>
                    <AntDesign name="playcircleo" size={50} color="white" />
                </View>
            </Pressable>
            <View style={styles.details}>
                <View style={styles.meta}>
                    <Text style={styles.date}>{date}</Text>
                    <Text style={styles.time}>{time}</Text>
                </View>
                <View style={styles.actions}>

                    <Pressable onPress={() => share(video.name)} style={styles.action}>
                        <Entypo name="share" size={24} color="white" />
                    </Pressable>
                    <View style={styles.action}>
                        <MaterialIcons name="delete" size={24} color="white" />
                    </View>
                    <View style={{ flex: 0.5 }} />
                </View>
            </View>
        </View>
    }

    const refresh = async () => {
        setRefreshing(true)
        const videos = await get_recordings();
        setVideos(videos)
        setRefreshing(false)
    }

    const initialize = async () => {
        vid.current = await getVid();
        uid.current = await getUid();
    }

    React.useEffect(() => {
        initialize();
        refresh()
    }, [])

    return <SafeAreaView style={styles.root}>
        <Modal
            visible={downloading}
            transparent={true}
        >
            <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center' }}>
                <View style={styles.downloader}>
                    <View style={styles.status}>
                        <View style={styles.info}>
                            <Text style={[styles.info_text, { marginLeft: 20 }]}>Downloading video...</Text>
                        </View>
                        <View style={[styles.info, { alignItems: 'flex-end' }]}>
                            <Text style={[styles.info_text, { marginRight: 20 }]}>{downloaded}%</Text>
                        </View>
                    </View>
                    <View style={styles.progress}>
                        <Progress.Bar progress={downloaded / 100} width={300} color={'#ffffff'} unfilledColor={'#595959'} height={8} borderWidth={0} />
                    </View>
                </View>
            </View>
        </Modal>
        <View style={styles.header}>
            <AntDesign name="left" onPress={() => navigation.goBack()} size={24} color="white" />
            <Text style={styles.name}>Recordings</Text>
        </View>
        <View style={styles.body}>
            {videos.length > 0 ? <ScrollView refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={refresh} />
            } contentContainerStyle={styles.list}>
                {videos.map((item, index) => {
                    return <Card key={index} video={item} />
                })}
            </ScrollView> :
                <View style={styles.placeholder}>
                    <Feather name={refreshing ? "video" : "video-off"} size={24} color="grey" />
                    <Text style={{ color: 'grey' }}>{refreshing ? 'Loading...' : 'No videos to show'}</Text>
                </View>}
        </View>
    </SafeAreaView>
}