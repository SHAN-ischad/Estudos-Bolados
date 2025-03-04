import { Text, View, ScrollView } from "react-native"
import { Header } from "../components/header"
import Constants from 'expo-constants'
import { Banner } from "../components/banner"
import { Search } from "../components/search"
import { Section } from "../components/section"
import { TrendingFoods } from "../components/trending"
import { Restaurents } from "../components/restaurents"
import { RestaurentsList } from "../components/restaurents_list"

const statusBarHeight = Constants.statusBarHeight
export default function Index() {
  return (
    <ScrollView style={{ flex: 1 }}
      className="bg-slate-200 "
      showsVerticalScrollIndicator={false}>
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header />
        <Banner />
        <Search />
      </View>

      <Section
        name="Comidas em Alta"
        label="Veja mais"
        action={() => { console.log("clickou no botão") }}
        size="text-2xl"

      />

      <TrendingFoods />


      <Section
        name="Famosos no DevFood"
        label="Veja Todas"
        action={() => { console.log("clickou no botão") }}
        size="text-2xl"
      />
      <Restaurents />

      <Section
        name="Restaurantes"
        label="Veja Todos"
        action={() => { console.log("clickou no botão") }}
        size="text-2xl"
      />
      <RestaurentsList />
    </ScrollView>
  );
}
