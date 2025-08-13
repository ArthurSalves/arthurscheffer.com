import { memo, useMemo } from 'react'

import NextImage, { ImageProps } from 'next/image'
import { stringToBase64 } from '@/utils/conversion'

const shimmer = `
<svg version="1.1" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#262626" />
</svg>`

const MINIMUM_IMAGE_SIZE_WITH_BLUR = 40

function BaseImage(props: ImageProps) {
    const { width, height, ...otherProps } = props

    const blurProps: Pick<ImageProps, 'placeholder' | 'blurDataURL'> = useMemo(() => {
        if (width && Number(width) < MINIMUM_IMAGE_SIZE_WITH_BLUR) return {}

        if (height && Number(height) < MINIMUM_IMAGE_SIZE_WITH_BLUR) return {}

        return {
            placeholder: 'blur',
            blurDataURL: `data:image/svg+xml;base64,teste`
        }
    }, [width, height])

    return <NextImage width={width} height={height} {...blurProps} {...otherProps} />
}

export const Image = memo(BaseImage)
