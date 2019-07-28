import * as React from "react";
import { FlatList, Image, ScrollView } from "react-native";
import { Paragraph, withTheme } from "react-native-paper";

import { dataOnlyImage } from "../../data";
import Header from "./Header";

class Profile2 extends React.Component {
  static navigationOptions = () => {
    return {
      header: null
    };
  };

  render() {
    const { theme } = this.props;
    return (
      <ScrollView
        style={styles.container(theme)}
        contentContainerStyle={styles.scrollView}
      >
        <Header theme={theme} onBack={() => this.props.navigation.goBack()} />
        <FlatList
          showsHorizontalScrollIndicator={false}
          style={styles.list}
          contentContainerStyle={styles.contentContainerStyle}
          keyExtractor={(item, index) => `${index}`}
          data={dataOnlyImage}
          renderItem={({ item }) => (
            <Image source={item} style={styles.image} />
          )}
          horizontal
        />
        <Paragraph style={styles.paragraph(theme)}>
          Expo apps are React Native apps which contain the Expo SDK. The SDK is
          a native-and-JS library which provides access to the device's system
          functionality (things like the camera, contacts, local storage, and
          other hardware). That means you don't need to use Xcode or Android
          Studio, or write any native code, and it also makes your pure-JS
          project very portable because it can run in any native environment
          containing the Expo SDK. Expo also provides UI components to handle a
          variety of use-cases that almost all apps will cover but are not baked
          into React Native core, e.g. icons, blur views, and more. Finally, the
          Expo SDK provides access to services which typically are a pain to
          manage but are required by almost every app. Most popular among these:
          Expo can manage your Assets for you, it can take care of Push
          Notifications for you, and it can build native binaries which are
          ready to deploy to the app store.
        </Paragraph>
      </ScrollView>
    );
  }
}

const styles = {
  container: theme => ({
    flex: 1,
    backgroundColor: theme.colors.background
  }),
  scrollView: {
    paddingBottom: 30
  },
  image: {
    width: 100,
    height: 100,
    margin: 5
  },
  list: {
    marginTop: 30
  },
  contentContainerStyle: {
    paddingHorizontal: 8
  },
  paragraph: theme => ({
    marginHorizontal: 16,
    marginTop: 30,
    marginBottom: 10,
    fontSize: 13,
    backgroundColor: theme.colors.background
  })
};

export default withTheme(Profile2);
