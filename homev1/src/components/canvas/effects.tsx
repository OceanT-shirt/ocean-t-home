import { EffectComposer, SSR } from '@react-three/postprocessing'

export const Effects = () => {
    const props = {
        temporalResolve: true,
        STRETCH_MISSED_RAYS: true,
        USE_MRT: true,
        USE_NORMALMAP: true,
        USE_ROUGHNESSMAP: true,
        ENABLE_JITTERING: true,
        ENABLE_BLUR: true,
        temporalResolveMix: 0.9,
        temporalResolveCorrectionMix: 0.25,
        resolutionScale: 1,
        blurMix: 0.5,
        maxDepth: 1,
        thickness: 10,
        ior: 1.45,
    }
    return(
        <EffectComposer disableNormalPass>
            <SSR {...props} />
        </EffectComposer>
    )
}

