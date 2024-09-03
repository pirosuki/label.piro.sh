<!--
npm run dev -- --host
-->

<style>
    :global(html), :global(body) {
        margin: unset;
        width: 100%;
        height: 100%;
        background-color: black;
        overscroll-behavior: none;
    }

    :global(body) {
        background-image: url("https://th.bing.com/th/id/R.c10e4787b6b971e9484f41f973337502?rik=np1%2bGEwnkeTk1w");
        background-size: cover;
        background-position: center;
    }

    #background_cover {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, .15);  
        backdrop-filter: blur(20px);
    }

    #left_div, #right_div {
        float: left;
        margin: 1vmin;
        opacity: 85%;
    }

    @media screen and (orientation:portrait) {
        #left_div, #right_div {
            width: calc(100% - 2vmin);
            height: calc(50% - 1.5vmin);
        }

        #right_div {
            margin-top: 0;
        }

        #history {
            height: calc(100% - 20vw - 0.8vmin);
        }
    }
    @media screen and (orientation:landscape) {
        #left_div, #right_div {
            width: calc(50% - 1.51vmin);
            height: calc(100% - 2vmin);
        }

        #right_div {
            margin-left: 0;
        }

        #history {
            height: calc(100% - 10vw - 0.8vmin);
        }
    }

    #input, .list_item {
        width: 100%;
        aspect-ratio: 5 / 1;
        border-radius: 1vmin;
        background-color: rgb(255, 255, 255);
    }

    #input_thumbnail, .list_item_thumbnail {
        float: left;
        height: 100%;
        width: 20%;
    }

    #input_qrcode, #input_logo, .list_item_qrcode, .list_item_logo {
        position: relative;
        height: 80%;
        width: 80%;
        top: 10%;
        left: 10%;
    }

    #input_logo_image, #input_logo_button {
        height: 100%;
        width: 100%;
    }

    #input_logo_button, #input_logo_image {
        position: absolute;
    }

    #input_logo_button {
        opacity: 0;
    }
    
    #input_fields, .list_item_fields {
        float: left;
        height: 100%;
        width: calc(70% - 2vmin);
    }
    .input_field, .list_item_field {
        display: block;
        border: unset;
        padding: unset;
        height: 20%;
        width: 100%;
        background-color: unset;
        color: rgb(0, 0, 0);
        font-size: 3vmin;
    }
    #input_count, .list_item_count {
        float: left;
        margin-left: 1vmin;
        margin-top: 1vmin;
        border: unset;
        padding: unset;
        width: 10%;
        border-radius: 1vmin;
        text-align: center;
        height: calc(60% - 2vmin);
        background-color: rgb(220, 220, 220);
        color: rgb(0, 0, 0);
        font-size: 2vmin;
        font-weight: bold;
    }
    #input_add, .list_item_delete {
        float: left;
        margin-left: 1vmin;
        margin-top: 1vmin;
        border: unset;
        padding: unset;
        border-radius: 1vmin;
        width: 10%;
        height: calc(40% - 1vmin);
        background-color: rgb(220, 220, 220);
        color: rgb(0, 0, 0);
        font-size: 2vmin;
        font-weight: bold;
    }

    #history {
        margin-top: 1vmin;
        border-radius: 1vmin;
        background-color: rgb(40, 40, 40, 0.5);
        overflow-y: scroll;
    }

    .history_item {
        margin: 0.5vmin;
        width: calc(100% - 1vmin);
        aspect-ratio: 6 / 1;
        border-radius: 1vmin;
        background-color: rgba(255, 255, 255, 0.8);
    }

    .history_item_fields {
        float: left;
        height: 100%;
        width: calc(90% - 2vmin);
    }

    .history_item_field {
        display: block;
        border: unset;
        padding: unset;
        margin-left: 1vmin;
        height: 25%;
        width: 100%;
        background-color: unset;
        color: rgb(0, 0, 0);
        font-size: 3vmin;
    }

    .history_item_use {
        float: left;
        margin-left: 1vmin;
        margin-top: 1vmin;
        border: unset;
        padding: unset;
        width: 10%;
        border-radius: 1vmin;
        text-align: center;
        height: calc(60% - 2vmin);
        background-color: rgb(200, 200, 200);
        color: rgb(0, 0, 0);
        font-size: 2vmin;
        font-weight: bold;
    }

    .history_item_delete {
        float: left;
        margin-left: 1vmin;
        margin-top: 1vmin;
        border: unset;
        padding: unset;
        border-radius: 1vmin;
        width: 10%;
        height: calc(40% - 1vmin);
        background-color: rgb(200, 200, 200);
        color: rgb(0, 0, 0);
        font-size: 2vmin;
        font-weight: bold;
    }

    #list {
        height: calc(80% - 1vmin);
        border-radius: 1vmin;
        background-color: rgb(40, 40, 40, 0.5);
        margin-bottom: 1vmin;
        overflow-y: scroll;
    }

    .list_item {
        margin: 0.5vmin;
        width: calc(100% - 1vmin);
    }

    #output {
        height: calc(20%);
        border-radius: 1vmin;
        margin-top: 0;
        background-color: rgb(40, 40, 40, 0.5);
    }

    .input_field_small, .history_item_field_small, .list_item_field_small {
        font-size: 2vmin;
    }
</style>

<script lang="ts">
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    import { PDFDocument, degrees } from '@pdfme/pdf-lib';
    import { generate } from '@pdfme/generator';
    import type { BlankPdf, Template } from '@pdfme/common';
    import { text, barcodes, image } from '@pdfme/schemas';

    type history_item = {
        "field1": string,
        "field2": string,
        "field3": string,
        "field4": string
    };
    type history_type = {[key: string] : history_item}
    const history = writable<history_type>({});

    type list_item = {
        "field1": string,
        "field2": string,
        "field3": string,
        "field4": string,
        "field5": string,
        "count": string // convert this to int later
    };
    type list_type = {[key: string] : list_item} // https://blog.logrocket.com/how-to-dynamically-assign-properties-object-typescript/
    const list = writable<list_type>({}); // https://dev.to/danawoodman/svelte-quick-tip-connect-a-store-to-local-storage-4idi

    type input_elements_type = {
        "qrcode": HTMLInputElement,
        "logo": HTMLInputElement,
        "field1": HTMLInputElement,
        "field2": HTMLInputElement,
        "field3": HTMLInputElement,
        "field4": HTMLInputElement,
        "field5": HTMLInputElement,
        "count": HTMLInputElement
    };
    let input_elements: input_elements_type;

    onMount(() => {
        input_elements = {
            "qrcode": (document.getElementById('input_qrcode') as HTMLInputElement),
            "logo": (document.getElementById('input_logo') as HTMLInputElement),
            "field1": (document.getElementById('input_field1') as HTMLInputElement),
            "field2": (document.getElementById('input_field2') as HTMLInputElement),
            "field3": (document.getElementById('input_field3') as HTMLInputElement),
            "field4": (document.getElementById('input_field4') as HTMLInputElement),
            "field5": (document.getElementById('input_field5') as HTMLInputElement),
            "count": (document.getElementById('input_count') as HTMLInputElement)
        };

        // restore values from localStorage if exist
        if (localStorage.history) { $history = JSON.parse(localStorage.history); } else { $history = {}; };
        if (localStorage.list) { $list = JSON.parse(localStorage.list); } else { $list = {}; };
        if (localStorage.lastField5) { input_elements.field5.value = localStorage.lastField5; };

        const input_logo_image_element = document.getElementById('input_logo_image') as HTMLImageElement;
        if (localStorage.logo && input_logo_image_element) { input_logo_image_element.src = localStorage.logo };

        list.subscribe((value) => localStorage.list = JSON.stringify(value));
        history.subscribe((value) => localStorage.history = JSON.stringify(value));
    });

    function addItem() {
        let input_values = {
            "field1": (input_elements.field1).value,
            "field2": (input_elements.field2).value,
            "field3": (input_elements.field3).value,
            "field4": (input_elements.field4).value,
            "field5": (input_elements.field5).value,
            "count": (input_elements.count).value
        };

        if (input_values.field5) {
            localStorage.lastField5 = input_values.field5;
        }

        // there must be a better way of doing this
        let input_values_thing = input_values.field1 + input_values.field2 + input_values.field3 + input_values.field4;
        
        // check if already exists in history
        let history_item_flagged: history_item | null = null;
        Object.entries($history).forEach(([id, item]) => {
            let history_item_thing = item.field1 + item.field2 + item.field3 + item.field4;

            if (history_item_thing === input_values_thing) { history_item_flagged = item }
        })

        if (!history_item_flagged) {
            let history_item_id = Math.random().toString(16).substring(2, 16); // https://dev.to/oyetoket/fastest-way-to-generate-random-strings-in-javascript-2k5a

            const input_values_shaved = {
                "field1": input_values.field1,
                "field2": input_values.field2,
                "field3": input_values.field3,
                "field4": input_values.field4
            };
            $history[history_item_id] = input_values_shaved;
        }
        


        // check if already exists in list
        let list_item_flagged: [string, list_item] | null = null;
        Object.entries($list).forEach(([id, item]) => {
            let list_item_thing = item.field1 + item.field2 + item.field3 + item.field4;

            if (list_item_thing === input_values_thing) { list_item_flagged = [id, item] }
        })

        if (!list_item_flagged) {
            let list_item_id = Math.random().toString(16).substring(2, 16); // https://dev.to/oyetoket/fastest-way-to-generate-random-strings-in-javascript-2k5a

            $list[list_item_id] = input_values;
        }
        else {
            let counts_combined = Number($list[list_item_flagged[0]].count) + Number(input_values.count);

            // cap at 99
            if (counts_combined < 100) {
                $list[list_item_flagged[0]].count = counts_combined.toString();
            }
            else {
                $list[list_item_flagged[0]].count = (99).toString();
            }
        }
    }

    function deleteItem(element: EventTarget & HTMLInputElement) {
        if (element.parentElement?.classList.contains('list_item')) {
            delete $list[element.parentElement?.id as string]

            $list = $list; // force refresh
        }
        else if (element.parentElement?.classList.contains('history_item')) {
            delete $history[element.parentElement?.id as string]

            $history = $history; // force refresh
        }
    }
    
    function useHistory(element: EventTarget & HTMLInputElement) {
        let historyEntry = $history[element.parentElement?.id as string];

        input_elements.field1.value = historyEntry.field1;
        input_elements.field2.value = historyEntry.field2;
        input_elements.field3.value = historyEntry.field3;
        input_elements.field4.value = historyEntry.field4;
    }

    function editQrcode() {
        let newQrcode: string | null = prompt("Enter QR Code value", localStorage.qrcode);
    
        if (newQrcode) {
            localStorage.qrcode = newQrcode;
        }
    }

    function editLogo(element: EventTarget & HTMLInputElement) {
        if (element.files) {
            let file = element.files[0];

            if (file.type === "image/png" || file.type === "image/jpeg") {
                const reader = new FileReader();
                reader.onload = function() {
                    if (reader.result && typeof(reader.result) === 'string') {
                        const result: string = reader.result;

                        const input_logo_image_element = document.getElementById('input_logo_image') as HTMLImageElement;
                        input_logo_image_element.src = result;

                        Object.entries(document.getElementsByClassName('list_item_logo')).forEach(([i, element]) => {
                            (element as HTMLImageElement).src = result;
                        })

                        localStorage.logo = result;
                    }
                }

                reader.readAsDataURL(file);
            }
        }
    }

    function handlePaste(event: Event) {
        let inputEvent = event as InputEvent;

        if (inputEvent.inputType === 'insertFromPaste') {
            let formattedData: string[] = [];
            if (inputEvent.data?.includes('	')) {
                formattedData = inputEvent.data?.split('	');
            }
            else if (inputEvent.data?.includes('\n')) {
                formattedData = inputEvent.data?.split('\n');
            }

            for (let i in formattedData.slice(0, 5)) {
                let input_elements_fields = [input_elements.field1, input_elements.field2, input_elements.field3, input_elements.field4, input_elements.field5];
                input_elements_fields[i].value = formattedData[i];
            }
        }
    }

    function toggleThumbnail() {
        const qrcode_elements = document.querySelectorAll('#input_qrcode, .list_item_qrcode');
        const logo_elements = document.querySelectorAll('#input_logo, .list_item_logo');

        if (input_elements.logo.hidden === false) {
            qrcode_elements.forEach(element => {
                (element as HTMLDivElement).hidden = false;
            })
            logo_elements.forEach(element => {
                (element as HTMLImageElement).hidden = true;
            })

            localStorage.using_logo = 0;
        }
        else {
            logo_elements.forEach(element => {
                (element as HTMLImageElement).hidden = false;
            })
            qrcode_elements.forEach(element => {
                (element as HTMLDivElement).hidden = true;
            })

            localStorage.using_logo = 1;
        }
    }

    const template: Template = {
        basePdf: <BlankPdf> {
            width: 100,
            height: 20,
            padding: [0, 0, 0, 0]
        },
        schemas: [
            {
                qrcodeField: {
                    type: "qrcode",
                    position: {
                        x: 2,
                        y: 2
                    },
                    width: 16,
                    height: 16
                },
                logoField: {
                    type: "image",
                    position: {
                        x: 2,
                        y: 2
                    },
                    width: 16,
                    height: 16
                },
                textField1: {
                    type: "text",
                    position: {
                        x: 20,
                        y: 0.5
                    },
                    width: 80,
                    height: 4,
                    fontSize: 10,
                    fontName: "field1font"
                },
                textField2: {
                    type: "text",
                    position: {
                        x: 20,
                        y: 4.5
                    },
                    width: 80,
                    height: 4,
                    fontSize: 8,
                    fontName: "field2font"
                },
                textField3: {
                    type: "text",
                    position: {
                        x: 20,
                        y: 8.5
                    },
                    width: 80,
                    height: 4,
                    fontSize: 8,
                    fontName: "field3font"
                },
                textField4: {
                    type: "text",
                    position: {
                        x: 20,
                        y: 12.5
                    },
                    width: 80,
                    height: 3.5,
                    fontSize: 6,
                    fontName: "field4font"
                },
                textField5: {
                    type: "text",
                    position: {
                        x: 20,
                        y: 16
                    },
                    width: 80,
                    height: 3.5,
                    fontSize: 6,
                    fontName: "field5font"
                }
            }
        ]
    }

    async function generatePDF() {
        const pdf = await PDFDocument.create();

        for (let i in Object.entries($list)) {
            const inputsRaw = Object.entries($list)[i][1];

            let qrcode = "";
            let logo = "";

            console.log(input_elements.logo.hidden, localStorage.logo);

            console.log(input_elements.qrcode.hidden, localStorage.qrcode);

            if (!input_elements.logo.hidden && localStorage.logo) {
                logo = localStorage.logo;
            }
            else if (!input_elements.qrcode.hidden && localStorage.qrcode){
                qrcode = localStorage.qrcode;
            }

            const inputs = [{
                qrcodeField: qrcode,
                logoField: logo,
                textField1: inputsRaw.field1,
                textField2: inputsRaw.field2,
                textField3: inputsRaw.field3,
                textField4: inputsRaw.field4,
                textField5: inputsRaw.field5
            }]

            const itemPdf = await generate({template, inputs, plugins: { text, qrcode: barcodes.qrcode, image }});
            const itemPdfBuffer = await PDFDocument.load(itemPdf.buffer);
            const itemPdfCopied = await pdf.copyPages(itemPdfBuffer, itemPdfBuffer.getPageIndices());

            itemPdfCopied.forEach(page => {
                if (Number(localStorage.rotation)) {
                    page.setRotation(degrees(Number(localStorage.rotation)))
                }

                for (let n = 0; n < Number(inputsRaw.count); n++) {
                    pdf.addPage(page);                    
                }
            })
        }

        const pdfBytes = await pdf.save();
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });

        window.location.href = URL.createObjectURL(blob);

        // didn't work because ios :(
        /*
        const printFrame = document.getElementById('printFrame') as HTMLIFrameElement;
        printFrame.src = URL.createObjectURL(blob);

        // idk why this works but () => doesn't
        printFrame.onload = function() {
            printFrame.focus();
            printFrame.contentWindow?.print();
        }

        */
    }
</script>

<div id="background_cover"></div>
<div id="left_div">
    <div id="input">
        <div id="input_thumbnail">
            <input id="input_qrcode" type="image" src="./sampleqrcode.svg" alt="input qrcode" on:click={() => editQrcode()}>
            <div id="input_logo" hidden>
                <img id="input_logo_image" alt="input logo">
                <input id="input_logo_button" type="file" accept="image/png, image/jpeg" on:change={(event) => editLogo(event.currentTarget)}>
            </div>
        </div>
        <div id="input_fields">
            <input id="input_field1" class="input_field" placeholder="field1" on:input={(event) => handlePaste(event)}>
            <input id="input_field2" class="input_field" placeholder="field2">
            <input id="input_field3" class="input_field" placeholder="field3">
            <input id="input_field4" class="input_field input_field_small" placeholder="field4">
            <input id="input_field5" class="input_field input_field_small" placeholder="field5">
        </div>
        <select id="input_count">
            {#each Array.from(Array(100).keys()).slice(1, 100) as n}
                <option value="{String(n)}">{n}</option>
            {/each}
        </select>
        <input id="input_add" type="button" value="add" on:click={() => addItem()}>
    </div>
    <div id="history">
        {#each Object.entries($history) as [id, item]}
        <div id={id} class="history_item">
            <div class="history_item_fields">
                <input id="field1" class="history_item_field" placeholder="field1" value={$history[id].field1} disabled>
                <input id="field2" class="history_item_field" placeholder="field2" value={$history[id].field2} disabled>
                <input id="field3" class="history_item_field" placeholder="field3" value={$history[id].field3} disabled>
                <input id="field4" class="history_item_field history_item_field_small" placeholder="field4" value={$history[id].field4} disabled>
            </div>
            <input class="history_item_use" type="button" value="use" on:click={(event) => useHistory(event.currentTarget)}>
            <input class="history_item_delete" type="button" value="delete" on:click={(event) => deleteItem(event.currentTarget)}>
        </div>
        {/each}
    </div>
</div>
<div id="right_div">
    <div id="list">
        {#each Object.entries($list) as [id, item]}
        <div id={id} class="list_item">
            <div class="list_item_thumbnail">
                <img class="list_item_qrcode" src="./sampleqrcode.svg" alt="list item qrcode">
                <img class="list_item_logo" src={localStorage.logo} alt="list item logo" hidden>
            </div>
            <div class="list_item_fields">
                <input class="list_item_field" placeholder="field1" bind:value={$list[id].field1}>
                <input class="list_item_field" placeholder="field2" bind:value={$list[id].field2}>
                <input class="list_item_field" placeholder="field3" bind:value={$list[id].field3}>
                <input class="list_item_field list_item_field_small" placeholder="field4" bind:value={$list[id].field4}>
                <input class="list_item_field list_item_field_small" placeholder="field5" bind:value={$list[id].field5}>
            </div>
            <select id="count" class="list_item_count" bind:value={$list[id].count}>
                {#each Array.from(Array(100).keys()).slice(1, 100) as n}
                    <option value="{String(n)}">{n}</option>
                {/each}
            </select>
            <input class="list_item_delete" type="button" value="delete" on:click={(event) => deleteItem(event.currentTarget)}>
        </div>
        {/each}
    </div>
    <div id="output">
        <button on:click={() => generatePDF()}>generatePDF()</button>
        <button on:click={() => console.log(localStorage)}>localStorage</button>
        <button on:click={() => console.log($list)}>$list</button>
        <button on:click={() => localStorage.clear()}>clear</button>
        <button on:click={() => toggleThumbnail()}>toggle qrcode/logo</button>
        <div id="option_rotate">
            <input id='option_rotate_range' type="range" max="270" step="90" on:input={(event) => {
                let option_rotate_display_element = document.getElementById('option_rotate_display');
                if (option_rotate_display_element) {
                    option_rotate_display_element.innerText = event.currentTarget.value;
                }

                localStorage.rotation = event.currentTarget.value;
            }}>
            <div id="option_rotate_display"></div>
        </div>
    </div>
</div>