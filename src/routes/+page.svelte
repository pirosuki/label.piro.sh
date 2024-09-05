<!--
npm run dev -- --host
-->

<style>
    * {
        all: unset;
        display: block;
        font-family: "Montserrat";
        font-size: calc(var(--label_height) * 0.15);
    }

    :global(html), :global(body) {       
        margin: unset; 
        width: 100%;
        height: 100%;
        overscroll-behavior: none;
    }

    :global(body) {
        background-color: black;
        background-image: url("https://th.bing.com/th/id/R.c10e4787b6b971e9484f41f973337502?rik=np1%2bGEwnkeTk1w");
        background-size: cover;
        background-position: center;
    }

    /* */

    .hidden {
        display: none;
    }
    
    .stretch {
        width: 100%;
        height: 100%;
    }

    .radius_large {
        border-radius: 1vmin;
    }

    .radius_medium {
        border-radius: 0.5vmin;
    }

    .radius_small {
        border-radius: 0.25vmin;
    }

    .margin_large {
        margin-left: 1vmin;
        margin-top: 1vmin;
    }

    .margin_medium {
        margin-left: 0.8vmin;
        margin-top: 0.8vmin;
    }

    .margin_small {
        margin-left: 0.6vmin;
        margin-top: 0.6vmin;
    }

    /* */

    #background_cover {
        position: fixed;
        background-color: rgba(255, 255, 255, .15);  
        backdrop-filter: blur(4vmin);
    }

    #left_div, #right_div {
        float: left;
        opacity: 85%;
    }

    @media screen and (orientation:portrait) {
        :root {
            --label_height: calc(20 - 2.5vmin * 0.975);
        }

        #left_div, #right_div {
            width: 100%;
            height: 50%;
        }

        #history_div {
            height: calc(100% - 20vw - 2vmin);
        }

        #input_div, #history_div, #list_div, #output_div {
            width: calc(100% - 2vmin);
        }
    }
    @media screen and (orientation:landscape) {
        :root {
            --label_height: calc(10vw - 3.1vmin * 0.975);
        }

        #left_div, #right_div {
            width: 50%;
            height: 100%;
        }

        #history_div {
            height: calc(100% - 10vw - 3vmin);
        }

        #input_div, #history_div, #list_div, #output_div {
            width: calc(100% - 1.5vmin);
        }

        #list_div, #output_div {
            margin-left: 0.5vmin;
        }
    }

    /* Content divs */
    #input_div, #history_div, #list_div, #output_div, #options_div {
        float: left;
        background-color: rgb(40, 40, 40, 0.5);
        overflow-y: scroll;
    }
    #input_div {
        aspect-ratio: 5 / 1;
    }
    #list_div {
        height: calc(80% - 1.5vmin);
    }
    #output_div {
        height: calc(20% - 1.5vmin);
    }
    #options_div {
        width: calc(100% - 2vmin);
        height: calc(100% - 2vmin);
    }
    /* */

    #input {
        width: calc(100% - 1.6vmin);
        height: calc(100% - 1.6vmin);
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

    #input_logo_button {
        opacity: 0;
    }
    
    #input_fields, .list_item_fields {
        float: left;
        padding-top: calc(var(--label_height) * 0.025);
        height: calc(100% - var(--label_height) * 0.05);
        width: calc(70% - 0.3vmin);
    }
    .input_field, .list_item_field {
        height: 21%;
        width: 100%;
        color: rgb(0, 0, 0);
        font-size: calc(var(--label_height) * 0.21);
    }

    .input_field_small, .list_item_field_small {
        height: 18.5%;
        font-size: calc(var(--label_height) * 0.185);
    }

    /* input and list_item buttons */
    #input_count, .list_item_count, #input_add, .list_item_delete {
        float: left;
        width: calc(10% - 0.9vmin);
        height: calc(60% - 0.9vmin);
        font-weight: bold;
        text-align: center;
        color: rgb(0, 0, 0);
        background-color: rgb(220, 220, 220);
    }
    #input_add, .list_item_delete {
        height: calc(40% - 0.9vmin);
    }
    /* */

    .history_item {
        display: block;
        width: calc(100% - 1.6vmin);
        aspect-ratio: 6 / 1;
        background-color: rgba(255, 255, 255, 0.8);
    }

    .history_item_fields {
        float: left;
        height: 100%;
        width: calc(90% - 0.3vmin);
    }

    .history_item_field {
        height: 25%;
        width: 100%;
        background-color: unset;
        color: rgb(0, 0, 0);
    }

    /* history_item buttons */
    .history_item_use, .history_item_delete {
        float: left;
        font-weight: bold;
        text-align: center;
        color: rgb(0, 0, 0);
        width: calc(10% - 0.9vmin);
        height: calc(60% - 2vmin);
        background-color: rgb(200, 200, 200);
    }
    .history_item_delete {
        height: calc(40% - 1vmin);
    }
    /* */

    .list_item {
        width: calc(100% - 1.6vmin);
        aspect-ratio: 5 / 1;
        background-color: rgb(255, 255, 255);
    }

    #output_main {
        float: left;
        height: 100%;
        width: 20%;
    }

    #output_submit, #output_clear_list, #output_options {
        height: calc(50% - 1.2vmin);
        width: calc(100% - 1.6vmin);
        font-weight: bold;
        text-align: center;
        background-color: rgb(255, 255, 255);
    }
    #output_options {
        float: right;
        margin-right: 0.8vmin;
        width: calc(20% - 1.6vmin);
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
    const history = writable<{[key: string]: history_item}>({});

    type list_item = {
        "field1": string,
        "field2": string,
        "field3": string,
        "field4": string,
        "field5": string,
        "count": string // convert this to int later
    };
    const list = writable<{[key: string]: list_item}>({});

    type options_type = {
        "fonts": {[key: string]: { "data": string }},
        "rotation": number,
        "qrcode": string,
        "logo": string,
        "use_logo": boolean,
        "last_field5": string,
    };
    const options = writable({} as options_type); // magic?

    type style_item = {
        "font_name": string,
        "underline": boolean
    }
    const style = writable<{[key: string]: style_item}>({});

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
        if (localStorage.options) { $options = JSON.parse(localStorage.options); } else { $options = <options_type>{}; $options.fonts = {} };
        if (localStorage.style) { $style = JSON.parse(localStorage.style); } else {
            $style = {
                field1: <style_item>{},
                field2: <style_item>{},
                field3: <style_item>{},
                field4: <style_item>{},
                field5: <style_item>{}
            };
        };

        if ($options.last_field5) { input_elements.field5.value = $options.last_field5; };

        const input_logo_image_element = document.getElementById('input_logo_image') as HTMLImageElement;
        if ($options.logo && input_logo_image_element) { input_logo_image_element.src = $options.logo };

        list.subscribe((value) => localStorage.list = JSON.stringify(value));
        history.subscribe((value) => localStorage.history = JSON.stringify(value));
        options.subscribe((value) => localStorage.options = JSON.stringify(value));
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
            $options.last_field5 = input_values.field5;
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

        input_elements.field1.value = "";
        input_elements.field2.value = "";
        input_elements.field3.value = "";
        input_elements.field4.value = "";
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
        let newQrcode: string | null = prompt("Enter QR Code value", $options.qrcode);
    
        if (newQrcode) {
            $options.qrcode = newQrcode;
        }
    }

    function editLogo(element: EventTarget & HTMLInputElement) {
        if (element.files) {
            let file = element.files[0];
            if (file.size > 5000000) {
                alert("Image too large (>5MB)")

                return;
            }

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

                        $options.logo = result;
                    }
                }

                reader.readAsDataURL(file);
            }
        }
    }

    function uploadFont(element: EventTarget & HTMLInputElement) {
        if (element.files) {
            let file = element.files[0];
            if (file.size > 2000000) {
                alert("Font too large (>5MB)")

                return;
            }
            else if ($options.fonts[file.name]) {
                return;
            }

            if (file.type === "font/ttf" || file.type === "image/otf" || file.type === "image/woff") {
                const reader = new FileReader();
                reader.onload = function() {
                    if (reader.result && typeof(reader.result) === 'string') {
                        const result: string = reader.result;

                        const option_target_select_element = document.getElementById('option_target_select') as HTMLInputElement;
                        const field_name = option_target_select_element.value;

                        $style[field_name].font_name = file.name;

                        $options.fonts[file.name] = {data: ""};
                        $options.fonts[file.name].data = result;
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

    function useLogo(value: boolean) {
        const qrcode_elements = document.querySelectorAll('#input_qrcode, .list_item_qrcode');
        const logo_elements = document.querySelectorAll('#input_logo, .list_item_logo');

        if (value) {
            logo_elements.forEach(element => {
                (element as HTMLImageElement).classList.remove('hidden');
            })
            qrcode_elements.forEach(element => {
                (element as HTMLDivElement).classList.add('hidden');
            })
        }
        else {
            qrcode_elements.forEach(element => {
                (element as HTMLDivElement).classList.remove('hidden');
            })
            logo_elements.forEach(element => {
                (element as HTMLImageElement).classList.add('hidden');
            })
        }

        $options.use_logo = value;
    }

    async function submit() {
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
                        height: 3,
                        fontName: "field1font",
                        verticalAlignment: "middle",
                        lineHeight: 0.8,
                        dynamicFontSize: {
                            "min": 1,
                            "max": 100,
                            "fit": "vertical"
                        }
                    },
                    textField2: {
                        type: "text",
                        position: {
                            x: 20,
                            y: 4.5
                        },
                        width: 80,
                        height: 3,
                        fontName: $style.field2.font_name,
                        verticalAlignment: "middle",
                        lineHeight: 0.8,
                        dynamicFontSize: {
                            "min": 1,
                            "max": 100,
                            "fit": "vertical"
                        }
                    },
                    textField3: {
                        type: "text",
                        position: {
                            x: 20,
                            y: 8.5
                        },
                        width: 80,
                        height: 3,
                        fontName: $style.field3.font_name,
                        verticalAlignment: "middle",
                        lineHeight: 0.8,
                        dynamicFontSize: {
                            "min": 1,
                            "max": 100,
                            "fit": "vertical"
                        }
                    },
                    textField4: {
                        type: "text",
                        position: {
                            x: 20,
                            y: 12.5
                        },
                        width: 80,
                        height: 2.5,
                        fontName: $style.field4.font_name,
                        verticalAlignment: "middle",
                        lineHeight: 0.8,
                        dynamicFontSize: {
                            "min": 1,
                            "max": 100,
                            "fit": "vertical"
                        }
                    },
                    textField5: {
                        type: "text",
                        position: {
                            x: 20,
                            y: 16
                        },
                        width: 80,
                        height: 2.5,
                        fontName: $style.field5.font_name,
                        verticalAlignment: "middle",
                        lineHeight: 0.8,
                        dynamicFontSize: {
                            "min": 1,
                            "max": 100,
                            "fit": "vertical"
                        },
                        underline: $style.field2.font_name
                    }
                }
            ]
        }

        const pdf = await PDFDocument.create();

        for (let i in Object.entries($list)) {
            const inputsRaw = Object.entries($list)[i][1];

            let qrcode = "";
            let logo = "";
            
            // the second check here might be broken due to options_type possible initializing all properties
            if (!input_elements.logo.classList.contains('hidden') && $options.logo) {
                logo = $options.logo;
            }
            else if (!input_elements.qrcode.classList.contains('hidden') && $options.qrcode){
                qrcode = $options.qrcode;
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

            const fonts = $options.fonts;

            const itemPdf = await generate({template, inputs, plugins: { text, qrcode: barcodes.qrcode, image }, options: { fonts } });
            const itemPdfBuffer = await PDFDocument.load(itemPdf.buffer);
            const itemPdfCopied = await pdf.copyPages(itemPdfBuffer, itemPdfBuffer.getPageIndices());

            itemPdfCopied.forEach(page => {
                if ($options.rotation) {
                    page.setRotation(degrees($options.rotation))
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
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
<div id="background_cover" class="stretch hidden"></div>
<div id="main_div" class="stretch">
    <div id="left_div">
        <div id="input_div" class="radius_large margin_large">
            <div id="input" class="radius_medium margin_medium">
                <div id="input_thumbnail">
                    <input id="input_qrcode" type="image" src="./sampleqrcode.svg" alt="input qrcode" on:click={() => editQrcode()} on:load={(event) => { if ($options.use_logo) { event.currentTarget.classList.add('hidden'); } }}>
                    <div id="input_logo" on:load={(event) => { if (!$options.use_logo) { event.currentTarget.classList.add('hidden'); } }}>
                        <img id="input_logo_image" class="stretch" alt="input logo">
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
                <select id="input_count" class="radius_small margin_small button">
                    {#each Array.from(Array(100).keys()).slice(1, 100) as n}
                        <option value="{String(n)}">{n}</option>
                    {/each}
                </select>
                <input id="input_add" class="radius_small margin_small button" type="button" value="add" on:click={() => addItem()}>
            </div>
        </div>
        <div id="history_div" class="radius_large margin_large">
            {#each Object.entries($history) as [id, item]}
            <div id={id} class="history_item radius_medium margin_medium">
                <div class="history_item_fields">
                    <input id="field1" class="history_item_field" placeholder="field1" value={$history[id].field1} disabled>
                    <input id="field2" class="history_item_field" placeholder="field2" value={$history[id].field2} disabled>
                    <input id="field3" class="history_item_field" placeholder="field3" value={$history[id].field3} disabled>
                    <input id="field4" class="history_item_field history_item_field_small" placeholder="field4" value={$history[id].field4} disabled>
                </div>
                <input class="history_item_use radius_small margin_small button margin_small" type="button" value="use" on:click={(event) => useHistory(event.currentTarget)}>
                <input class="history_item_delete radius_small margin_small button margin_small" type="button" value="delete" on:click={(event) => deleteItem(event.currentTarget)}>
            </div>
            {/each}
        </div>
    </div>
    <div id="right_div">
        <div id="list_div" class="radius_large margin_large">
            {#each Object.entries($list) as [id, item]}
            <div id={id} class="list_item radius_medium margin_medium">
                <div class="list_item_thumbnail">
                    <img class="list_item_qrcode" src="./sampleqrcode.svg" alt="list item qrcode" on:load={(event) => { if ($options.use_logo) { event.currentTarget.classList.add('hidden'); } }}>
                    <img class="list_item_logo" src={$options.logo} alt="list item logo" on:load={(event) => { if (!$options.use_logo) { event.currentTarget.classList.add('hidden'); } }}>
                </div>
                <div class="list_item_fields">
                    <input class="list_item_field" bind:value={$list[id].field1}>
                    <input class="list_item_field" bind:value={$list[id].field2}>
                    <input class="list_item_field" bind:value={$list[id].field3}>
                    <input class="list_item_field list_item_field_small" bind:value={$list[id].field4}>
                    <input class="list_item_field list_item_field_small" bind:value={$list[id].field5}>
                </div>
                <select id="count" class="list_item_count radius_small margin_small button" bind:value={$list[id].count}>
                    {#each Array.from(Array(100).keys()).slice(1, 100) as n}
                        <option value="{String(n)}">{n}</option>
                    {/each}
                </select>
                <input class="list_item_delete radius_small margin_small button" type="button" value="delete" on:click={(event) => deleteItem(event.currentTarget)}>
            </div>
            {/each}
        </div>
        <div id="output_div" class="radius_large margin_large">
            <div id="output_main">
                <input id="output_submit" class="radius_medium margin_medium" type="button" value="Submit!" on:click={() => submit()}>
                <input id="output_clear_list" class="radius_medium margin_medium" type="button" value="Clear list" on:click={() => { if (confirm("Clear list?")) { $list = {} } } }>
            </div>
            <input id="output_options" class="radius_medium margin_medium" type="button" value="Options" on:click={() => { document.getElementById('main_div')?.classList.add('hidden'); document.getElementById('options_div')?.classList.remove('hidden'); }}>
        </div>
    </div>
</div>
<div id="options_div" class="hidden radius_large margin_large">
    <div id="option_thumbnail">
        <input id='option_thumbnail_range' type="range" max="1" step="1" value="0" on:input={(event) => {
            let option_rotate_display_element = document.getElementById('option_thumbnail_display');
            if (option_rotate_display_element) {
                if (event.currentTarget.value === "0") {
                    option_rotate_display_element.innerText = "qrcode";
                }
                else {
                    option_rotate_display_element.innerText = "logo";
                }

                useLogo(Boolean(Number(event.currentTarget.value)));
            }
        }}>
        <div id="option_thumbnail_display"></div>
    </div>
    <div id="option_rotate">
        <input id='option_rotate_range' type="range" max="270" step="90" value="0" on:input={(event) => {
            let option_rotate_display_element = document.getElementById('option_rotate_display');
            if (option_rotate_display_element) {
                option_rotate_display_element.innerText = event.currentTarget.value;
            }

            $options.rotation = Number(event.currentTarget.value);
        }}>
        <div id="option_rotate_display"></div>
    </div>
    <select id="option_target_select" class="radius_small margin_small">
        {#each ["field1", "field2", "field3", "field4", "field5"] as field}
            <option value="{field}">{field}</option>
        {/each}
    </select>
    <div id="option_font">
        <input id="option_font_button" type="file" on:change={(event) => uploadFont(event.currentTarget)}>
    </div>
    <input id="option_return" class="radius_medium margin_medium" type="button" value="Return" on:click={() => { document.getElementById('options_div')?.classList.add('hidden'); document.getElementById('main_div')?.classList.remove('hidden'); }}>
</div>