import { View } from 'react-native';
import { ButtonLink } from '../../organisms/ButtonLink';
import useLinkHome from '@/src/hooks/linkHome';
export function BodyPage() {

    const { handleLink } = useLinkHome()
    return (
        <View className='h-[500px]  w-full mt-[10%]'>
            {/* Botões de ação no site */}

            <View className='flex-row gap-[10px] w-[50%] ml-[5%]  '>
                <ButtonLink action={handleLink} height={'200px'} width={'200px'}
                    textBottom={"Configure seus Serviços"} title={'Serviços'} backgroundColor='bg-slate-200' />
                <ButtonLink action={handleLink} height={'200px'} width={'200px'}
                    textBottom={"Configure seus Serviços"} title={'Serviços'} backgroundColor='bg-slate-200' />
                <ButtonLink action={handleLink} height={'200px'} width={'200px'}
                    textBottom={"Configure seus Serviços"} title={'Serviços'} backgroundColor='bg-slate-200' />
                <ButtonLink action={handleLink} height={'200px'} width={'200px'}
                    textBottom={"Configure seus Serviços"} title={'Serviços'} backgroundColor='bg-slate-200' />

            </View>
        </View>
    );
}