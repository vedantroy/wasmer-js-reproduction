import { WASI } from "@wasmer/wasi"
import bindings from "@wasmer/wasi/lib/bindings/browser"
import { lowerI64Imports } from "@wasmer/wasm-transformer"
(async () => {
    const wasi = new WASI({
        preopens: {},
        args: [],
        bindings
    })
    const bytes = await fetch('/some-url')
    const loweredBytes = await lowerI64Imports(new Uint8Array(await bytes.arrayBuffer()))
    const module = await WebAssembly.compile(loweredBytes)
    const instance = await WebAssembly.instantiate(module, {
        ...wasi.getImports(module)
    })
    wasi.start(instance)
})()