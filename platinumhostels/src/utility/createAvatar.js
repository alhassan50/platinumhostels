export default function createAvatar(displayName) {
    if (!displayName) {
        return
    }
    const displayNameString = String(displayName)
    const names = displayNameString.split(' ')
    return names[0].charAt(0)
}
