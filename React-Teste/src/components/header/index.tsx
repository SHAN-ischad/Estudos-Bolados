import { View, Text, TextInput, Button, Image } from 'react-native';

export function Header() {
  return (
    <View className='h-screen w-full overflow-auto  ' >

      <Text className=' text-[25pt] ml-[2%] text-orange-300 font-bold mt-[5%] mb-[5%]'>Bem vindo ao nosso site</Text>

      <View className='h-fit  bg-linear-65 from-purple-500 to-pink-500 items-center  justify-center'>

        <Image source={require('../../../assets/images/instagram.png')} style={{ height: 100, width: 100 }} className='mb-[20px]' />

        <View className=' w-[25%] items-center shadow-md  py-[50px] rounded-[5px] justify-center'>
          <Text className='text-[15pt] mb-[12px] text-orange-300'>Escreva seu nome</Text>
          <TextInput className='p-[10px] shadow-md rounded-[5px] mt-[2px]' placeholder='Escreva Aqui' />

          <Text className='text-[15pt] mb-[12px] mt-[5px] text-orange-300' >Escreva seu email</Text>
          <TextInput placeholder='Escreva Aqui' className='p-[10px] mt-[2px] shadow-md rounded-[5px]' />

          <Text className='text-[15pt] mb-[12px] mt-[5px] text-orange-300'>Escreva seu senha</Text>
          <TextInput placeholder='Escreva Aqui' className='p-[10px]  shadow-md rounded-[5px]' />

          <button className='mt-[10px] shadow-md py-[10px] w-[25%] rounded-md font-semibold hover:bg-orange-300 active:scale-95  duration-100 ease-out'>Enviar</button>
        </View>

      </View>
    </View>
  );
}