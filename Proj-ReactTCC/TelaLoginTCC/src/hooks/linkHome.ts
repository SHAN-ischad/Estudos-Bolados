
import { useRouter } from "expo-router"

const useLinkHome = () => {
    const router = useRouter()

    const handleLink = () => {
        router.push('./service')
    }
    return { handleLink }
}

export default useLinkHome