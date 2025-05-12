export const handleConcatPathImage = ({path}:{path: string}) => {
    return `${import.meta.env.VITE_APP_CDN_IMAGE}${path}`
}