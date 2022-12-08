export const getTwoCharOfName = (name: string) => {
    let names = name.split('', 3).filter((e: any, i: number) => i !== 1)
    return `${names[0] + names[1]}`
}