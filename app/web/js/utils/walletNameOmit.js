/**
 * @file walletNameOmit.js
 * @author zhouminghui
 * The problem of fix wallet name being too long
 */


export default function walletNameOmit(name) {
    if (name.length > 20) {
        return name.substring(0, 12) + '...';
    }
    return name;
}
