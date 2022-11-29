import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {
  Box,
  Text,
  IconButton,
  View,
  Avatar,
  FlatList,
  Button,
  Icon,
  Divider,
  ScrollView,
} from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Notification() {
  const navigation = useNavigation();

  return (
    <ScrollView>
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

      <Box p={3} mt={1} shadow="2" rounded={8} bgColor="white" mx={8}>
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          mx={1}
        >
          <Text fontSize="md" color="emerald.600">
            2x
            <Text fontSize="md" color="muted.600" ml={1}>
              Sacos
            </Text>
          </Text>
          <Box flexDirection="row">
            <Icon
              size="md"
              name="weight-hanging"
              as={FontAwesome5}
              color="emerald.600"
            />
            <Text color="muted.600" fontSize="md" pl={1}>
              10KG
            </Text>
          </Box>
          <Box flexDirection="row">
            <Icon
              size="md"
              name="street-view"
              as={FontAwesome5}
              color="emerald.600"
            />
            <Text color="muted.600" fontSize="md" pl={1}>
              3Km
            </Text>
          </Box>
        </Box>
        <Divider mt={2} />

        <Box flexDirection="row" mt={2} justifyContent="space-between" mx={1}>
          <Box flexDirection="column">
            <Box flexDirection="row">
              <Icon
                size="md"
                name="wine-bottle"
                as={FontAwesome5}
                color="emerald.600"
              />

              <Text fontSize="sm" color="muted.600" ml={2}>
                Vidro
              </Text>
            </Box>
            <Box flexDirection="row" mt={1}>
              <Icon
                size="md"
                name="bottle-soda-classic"
                as={MaterialCommunityIcons}
                color="emerald.600"
              />

              <Text fontSize="sm" color="muted.600" ml={2}>
                Plástico
              </Text>
            </Box>
          </Box>

          <Box flexDirection="column">
            <Text fontSize="sm" color="muted.600" alignSelf="center">
              Entre 09h até 13h
            </Text>
          </Box>
        </Box>
        <Divider mt={4} />
        <Box flexDirection="row" mt={2} justifyContent="space-between" mx={1}>
          <IconButton
            size="lg"
            _icon={{
             
              name: 'bars',
              as: FontAwesome5,
              color: 'emerald.600',
            }}
          />
          <Button
            px={6}
            size="sm"
            shadow="2"
            rounded={16}
            variant="solid"
            colorScheme="emerald"
            leftIcon={<Icon size="sm" name="recycle" as={FontAwesome5} />}
            onPress={() => navigation.navigate('Collect')}
          >
            ACEITAR
          </Button>
          <IconButton
            size="lg"
            _icon={{
              
              name: 'ban',
              as: FontAwesome5,
              color: 'error.400',
            }}
          />
        </Box>
      </Box>
      <Box p={3} mt={1} shadow="2" rounded={8} bgColor="white" mx={8}>
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          mx={1}
        >
          <Text fontSize="md" color="emerald.600">
            2x
            <Text fontSize="md" color="muted.600" ml={1}>
              Sacos
            </Text>
          </Text>
          <Box flexDirection="row">
            <Icon
              size="md"
              name="weight-hanging"
              as={FontAwesome5}
              color="emerald.600"
            />
            <Text color="muted.600" fontSize="md" pl={1}>
              10KG
            </Text>
          </Box>
          <Box flexDirection="row">
            <Icon
              size="md"
              name="street-view"
              as={FontAwesome5}
              color="emerald.600"
            />
            <Text color="muted.600" fontSize="md" pl={1}>
              3Km
            </Text>
          </Box>
        </Box>
        <Divider mt={2} />

        <Box flexDirection="row" mt={2} justifyContent="space-between" mx={1}>
          <Box flexDirection="column">
            <Box flexDirection="row">
              <Icon
                size="md"
                name="wine-bottle"
                as={FontAwesome5}
                color="emerald.600"
              />

              <Text fontSize="sm" color="muted.600" ml={2}>
                Vidro
              </Text>
            </Box>
            <Box flexDirection="row" mt={1}>
              <Icon
                size="md"
                name="bottle-soda-classic"
                as={MaterialCommunityIcons}
                color="emerald.600"
              />

              <Text fontSize="sm" color="muted.600" ml={2}>
                Plástico
              </Text>
            </Box>
          </Box>

          <Box flexDirection="column">
            <Text fontSize="sm" color="muted.600" alignSelf="center">
              Entre 09h até 13h
            </Text>
          </Box>
        </Box>
        <Divider mt={4} />
        <Box flexDirection="row" mt={2} justifyContent="space-between" mx={1}>
          <IconButton
            size="lg"
            _icon={{
             
              name: 'bars',
              as: FontAwesome5,
              color: 'emerald.600',
            }}
          />
          <Button
            px={6}
            size="sm"
            shadow="2"
            rounded={16}
            variant="solid"
            colorScheme="emerald"
            leftIcon={<Icon size="sm" name="recycle" as={FontAwesome5} />}
            onPress={() => navigation.navigate('Collect')}
          >
            ACEITAR
          </Button>
          <IconButton
            size="lg"
            _icon={{
              
              name: 'ban',
              as: FontAwesome5,
              color: 'error.400',
            }}
          />
        </Box>
      </Box>
      <Box p={3} mt={1} shadow="2" rounded={8} bgColor="white" mx={8}>
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          mx={1}
        >
          <Text fontSize="md" color="emerald.600">
            2x
            <Text fontSize="md" color="muted.600" ml={1}>
              Sacos
            </Text>
          </Text>
          <Box flexDirection="row">
            <Icon
              size="md"
              name="weight-hanging"
              as={FontAwesome5}
              color="emerald.600"
            />
            <Text color="muted.600" fontSize="md" pl={1}>
              10KG
            </Text>
          </Box>
          <Box flexDirection="row">
            <Icon
              size="md"
              name="street-view"
              as={FontAwesome5}
              color="emerald.600"
            />
            <Text color="muted.600" fontSize="md" pl={1}>
              3Km
            </Text>
          </Box>
        </Box>
        <Divider mt={2} />

        <Box flexDirection="row" mt={2} justifyContent="space-between" mx={1}>
          <Box flexDirection="column">
            <Box flexDirection="row">
              <Icon
                size="md"
                name="wine-bottle"
                as={FontAwesome5}
                color="emerald.600"
              />

              <Text fontSize="sm" color="muted.600" ml={2}>
                Vidro
              </Text>
            </Box>
            <Box flexDirection="row" mt={1}>
              <Icon
                size="md"
                name="bottle-soda-classic"
                as={MaterialCommunityIcons}
                color="emerald.600"
              />

              <Text fontSize="sm" color="muted.600" ml={2}>
                Plástico
              </Text>
            </Box>
          </Box>

          <Box flexDirection="column">
            <Text fontSize="sm" color="muted.600" alignSelf="center">
              Entre 09h até 13h
            </Text>
          </Box>
        </Box>
        <Divider mt={4} />
        <Box flexDirection="row" mt={2} justifyContent="space-between" mx={1}>
          <IconButton
            size="lg"
            _icon={{
             
              name: 'bars',
              as: FontAwesome5,
              color: 'emerald.600',
            }}
          />
          <Button
            px={6}
            size="sm"
            shadow="2"
            rounded={16}
            variant="solid"
            colorScheme="emerald"
            leftIcon={<Icon size="sm" name="recycle" as={FontAwesome5} />}
            onPress={() => navigation.navigate('Collect')}
          >
            ACEITAR
          </Button>
          <IconButton
            size="lg"
            _icon={{
              
              name: 'ban',
              as: FontAwesome5,
              color: 'error.400',
            }}
          />
        </Box>
      </Box>
    </ScrollView>
  );
}
