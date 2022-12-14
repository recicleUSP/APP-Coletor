import { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  Box,
  Text,
  Icon,
  Button,
  ScrollView,
  IconButton,
  Image,
  Center,
} from "native-base";
import { useNavigation } from "@react-navigation/native";

import { useCommon } from "../../contexts";
import { TouchableOpacity } from "react-native";

export default function Home() {
  const { setDevAlert } = useCommon();
  const [firstTime, setFirstTime] = useState(true);
  const navigation = useNavigation();

  return (
    <ScrollView bgColor="white">
      <Box px={6} mt={16}>
        <Box
          alignItems="center"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Box>
            <Text fontSize="lg" color="emerald.700">
              Olá João,
            </Text>
            <Text fontSize="2xl" color="emerald.700" lineHeight="md">
              Bem vindo!
            </Text>
          </Box>
          <IconButton
            size="lg"
            rounded={32}
            variant="solid"
            bgColor="emerald.50"
            onPress={() => navigation.navigate("Notification")}
            _icon={{
              name: "bell",
              paddingLeft: 0.5,
              as: FontAwesome5,
              color: "emerald.600",
            }}
          />
        </Box>

        <Text
          my={4}
          fontSize="3xl"
          lineHeight="xs"
          textAlign="center"
          color="emerald.600"
          onPress={() => setFirstTime(false)}
        >
          Locais para coletar próximo a você
        </Text>
      </Box>
      <Center>
        <TouchableOpacity onPress={() => navigation.navigate("Osrm")}>
          <Image
            size={280}
            alt="capa"
            source={require("../../images/Mapa-SC.png")}
          />
        </TouchableOpacity>
      </Center>
      <Box
        mt={8}
        py={12}
        borderWidth={2}
        alignItems="center"
        bgColor="emerald.50"
        borderColor="muted.100"
      >
        <Button
          px={12}
          size="lg"
          shadow="2"
          variant="solid"
          colorScheme="emerald"
          leftIcon={<Icon size="sm" name="recycle" as={FontAwesome5} />}
          onPress={() => navigation.navigate("Collect")}
        >
          COLETAR
        </Button>
      </Box>
    </ScrollView>
  );
}
