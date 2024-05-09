
export const generateRandomColor = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    let color = '#' + n.slice(0, 6);
    while(isTooBright(color)) {
      n = (Math.random() * 0xfffff * 1000000).toString(16);
      color = '#' + n.slice(0, 6);
    }
    return color;
  }
  
const isTooBright = (color: string) => {
    const c = color.substring(1);
    const rgb = parseInt(c, 16);
    const r = (rgb >> 16) & 0xff;  // extract red
    const g = (rgb >>  8) & 0xff;  // extract green
    const b = (rgb >>  0) & 0xff;  // extract blue
  
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  
    return luma > 250; // Return if too bright
  }
