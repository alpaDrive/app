import { View, Text, ScrollView, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';

const Ques = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleview}>
        <Pressable onPress={() => navigation.pop()} style={styles.arrow}>
          <MaterialIcons name="keyboard-arrow-left" size={30} color="white" />
        </Pressable>
        <View style={styles.title}>
          <Text style={styles.titletext}>FAQ</Text>
        </View>
        <View style={styles.menu} />
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.welcomeview}>
            <Text style={styles.one}>Question 1</Text>
            <Text style={styles.content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ut odio pharetra, gravida nisl vitae, dictum tellus. Nullam rutrum
              ipsum in quam dictum rutrum non ac neque. Duis porta accumsan velit
              sit amet molestie. Nullam egestas volutpat dui, at pretium enim
              efficitur id. Sed interdum varius nisl sit amet accumsan. Sed et
              tellus eu arcu porttitor tempor. Cras fermentum nunc interdum diam
              scelerisque sagittis. Aliquam malesuada hendrerit est, quis
              convallis nisi. Nulla commodo lorem ac eros lacinia, luctus luctus
              elit venenatis. Aenean vel dolor a nisl dignissim faucibus.
            </Text>
            <Text style={styles.one}>Question 2</Text>
            <Text style={styles.content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ut odio pharetra, gravida nisl vitae, dictum tellus. Nullam rutrum
              ipsum in quam dictum rutrum non ac neque. Duis porta accumsan velit
              sit amet molestie. Nullam egestas volutpat dui, at pretium enim
              efficitur id. Sed interdum varius nisl sit amet accumsan. Sed et
              tellus eu arcu porttitor tempor. Cras fermentum nunc interdum diam
              scelerisque sagittis. Aliquam malesuada hendrerit est, quis
              convallis nisi. Nulla commodo lorem ac eros lacinia, luctus luctus
              elit venenatis. Aenean vel dolor a nisl dignissim faucibus.
            </Text>
            <Text style={styles.one}>Question 3</Text>
            <Text style={styles.content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ut odio pharetra, gravida nisl vitae, dictum tellus. Nullam rutrum
              ipsum in quam dictum rutrum non ac neque. Duis porta accumsan velit
              sit amet molestie. Nullam egestas volutpat dui, at pretium enim
              efficitur id. Sed interdum varius nisl sit amet accumsan. Sed et
              tellus eu arcu porttitor tempor. Cras fermentum nunc interdum diam
              scelerisque sagittis. Aliquam malesuada hendrerit est, quis
              convallis nisi. Nulla commodo lorem ac eros lacinia, luctus luctus
              elit venenatis. Aenean vel dolor a nisl dignissim faucibus.
            </Text>
            <Text style={styles.one}>Question 4</Text>
            <Text style={styles.content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ut odio pharetra, gravida nisl vitae, dictum tellus. Nullam rutrum
              ipsum in quam dictum rutrum non ac neque. Duis porta accumsan velit
              sit amet molestie. Nullam egestas volutpat dui, at pretium enim
              efficitur id. Sed interdum varius nisl sit amet accumsan. Sed et
              tellus eu arcu porttitor tempor. Cras fermentum nunc interdum diam
              scelerisque sagittis. Aliquam malesuada hendrerit est, quis
              convallis nisi. Nulla commodo lorem ac eros lacinia, luctus luctus
              elit venenatis. Aenean vel dolor a nisl dignissim faucibus.
            </Text>
            <Text style={styles.one}>Question 5</Text>
            <Text style={styles.content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ut odio pharetra, gravida nisl vitae, dictum tellus. Nullam rutrum
              ipsum in quam dictum rutrum non ac neque. Duis porta accumsan velit
              sit amet molestie. Nullam egestas volutpat dui, at pretium enim
              efficitur id. Sed interdum varius nisl sit amet accumsan. Sed et
              tellus eu arcu porttitor tempor. Cras fermentum nunc interdum diam
              scelerisque sagittis. Aliquam malesuada hendrerit est, quis
              convallis nisi. Nulla commodo lorem ac eros lacinia, luctus luctus
              elit venenatis. Aenean vel dolor a nisl dignissim faucibus.
            </Text>
            <Text style={styles.one}>Question 6</Text>
            <Text style={styles.content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ut odio pharetra, gravida nisl vitae, dictum tellus. Nullam rutrum
              ipsum in quam dictum rutrum non ac neque. Duis porta accumsan velit
              sit amet molestie. Nullam egestas volutpat dui, at pretium enim
              efficitur id. Sed interdum varius nisl sit amet accumsan. Sed et
              tellus eu arcu porttitor tempor. Cras fermentum nunc interdum diam
              scelerisque sagittis. Aliquam malesuada hendrerit est, quis
              convallis nisi. Nulla commodo lorem ac eros lacinia, luctus luctus
              elit venenatis. Aenean vel dolor a nisl dignissim faucibus.
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Ques;