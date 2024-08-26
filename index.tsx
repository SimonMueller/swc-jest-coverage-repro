import helper from "helper";

export default function Index() {
    return <p>Test {helper()}</p>
}

export function Other() {
    return <p>Other {helper()}</p>
}
