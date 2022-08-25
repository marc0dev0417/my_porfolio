import { useCallback, useMemo } from "react"
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const Particle = () => {
    const options = useMemo(() =>{
        return{
            particles: {
                links: {
                    enable: true
                },
                move: {
                    enable: true
                },
                size: {
                    value: {
                        min: 1,
                        max: 3
                    }
                },
                
            }
        }
    }, [])

    const particlesLoaded = useCallback(async (container: any | undefined) => {
        loadFull(container)
      }, []);

      return <Particles init={particlesLoaded} options={options}/>
}
export default Particle