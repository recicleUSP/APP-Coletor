import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {
  Box,
  Text,
  IconButton,
  View,
  Avatar,
  FlatList,
} from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Notification() {
  const navigation = useNavigation();

  
  return (
    <View>
      <Box
        pb={4}
        height="140"
        bgColor="emerald.100"
        justifyContent="center"
        alignItems="center"
        px={8}
      >
        <IconButton
          size="lg"
          rounded={32}
          alignSelf="flex-start"
          left={6}
          bottom={-16}
          position="absolute"
          onPress={() => navigation.goBack()}
          bgColor="white"
          shadow={2}
          _icon={{
            paddingLeft: 1,
            name: 'chevron-left',
            as: FontAwesome5,
            color: 'emerald.500',
          }}
        />
        <Text fontSize="2xl" color="emerald.600" mb={-10}>
          COLETAR
        </Text>
      </Box>
      
        <Text color="muted.600" fontSize="md" px={8} mt={6} alignSelf="center">
          <Text fontSize="lg" color="emerald.600">
            ●{' '}
          </Text>
          20 Pontos para coletar próximo à você:
        </Text>

      
    </View>
  );
}
