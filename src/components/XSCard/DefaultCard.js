/**
 * Card
 */

import React from "react";
import PropTypes from "prop-types";
import { Image, View } from "react-native";
import { Card, Text, Paragraph, Title } from "react-native-paper";

export default class DefaultCard extends React.Component {
  static propTypes = {
    onPress: PropTypes.func,
    coverComponent: PropTypes.element,
    contentComponent: PropTypes.element,
    actionComponent: PropTypes.element,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    image: Image.propTypes.source,
    theme: PropTypes.object,
    containerStyle: PropTypes.any,
    imageStyle: PropTypes.any,
    contentContainerStyle: PropTypes.any,
    contentStyle: PropTypes.any,
    titleStyle: PropTypes.any,
    subtitleStyle: PropTypes.any,
    descriptionStyle: PropTypes.any
  };

  render() {
    const {
      onPress,
      coverComponent,
      contentComponent,
      actionComponent,
      title,
      subtitle,
      description,
      image,
      theme,
      containerStyle,
      imageStyle,
      contentContainerStyle,
      contentStyle,
      titleStyle,
      subtitleStyle,
      descriptionStyle
    } = this.props;

    return (
      <Card style={[styles.cardContainer, containerStyle]} onPress={onPress}>
        {React.isValidElement(coverComponent) ? (
          coverComponent
        ) : (
          <Card.Cover source={image} style={imageStyle} />
        )}
        {React.isValidElement(contentComponent) ? (
          contentComponent
        ) : (
          <Card.Content
            style={[styles.contentContainerStyle, contentContainerStyle]}
          >
            <View style={contentStyle}>
              {React.isValidElement(title) ? (
                title
              ) : (
                <Title style={[styles.title(theme), titleStyle]}>{title}</Title>
              )}

              {React.isValidElement(subtitle) ? (
                subtitle
              ) : (
                <Text style={[styles.subtitle(theme), subtitleStyle]}>
                  {subtitle}
                </Text>
              )}
            </View>
            {React.isValidElement(description) ? (
              description
            ) : (
              <Paragraph style={[styles.description(theme), descriptionStyle]}>
                {description}
              </Paragraph>
            )}
          </Card.Content>
        )}
        {React.isValidElement(actionComponent) && actionComponent}
      </Card>
    );
  }
}

const styles = {
  cardContainer: {
    margin: 10
  },
  contentContainerStyle: {
    paddingTop: 10,
    paddingBottom: 10
  },
  title: theme => ({
    marginBottom: 3,
    color: theme.colors.text
  }),
  subtitle: theme => ({
    fontSize: 14,
    color: theme.colors.subtitle
  }),
  description: theme => ({
    fontSize: 14,
    color: theme.colors.subtitle
  })
};
