import ImageColors from "react-native-image-colors"


export const getImageColors = async (urlImage: string) => {

  let primary;
  let secondary;

  const colors = await ImageColors.getColors(urlImage, {});

  switch (colors.platform) {
    case 'android':
      // android result properties
      primary = colors.dominant;
      secondary = colors.average;
    break;

    case 'ios':
      // iOS result properties
      primary = colors.primary;
      secondary = colors.secondary;
    break;

    default:
      throw new Error('Unexpected platform key')
  }

  return {
    primary,
    secondary
  }
}
