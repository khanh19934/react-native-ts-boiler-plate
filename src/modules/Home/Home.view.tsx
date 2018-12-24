import React from 'react';

import { View, Text } from 'react-native';

export interface IProps {
  loading: boolean;
}

const HomeView: React.SFC<IProps> = ({ loading }) => {
  return (
    <View>
      <Text>Home view</Text>
    </View>
  );
};
export default HomeView;
