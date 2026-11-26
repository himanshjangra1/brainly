
export function random(len: number) {
    let option = "dfkja49eweor9uA24werfsdf#";
    let length = option.length;

    let ans = "";
    for (let i = 0; i < len; i++) {
        ans += option[Math.floor((Math.random() * length))];
    }

    return ans;
}