<!--
npm run dev -- --host
-->

<style>
    * {
        all: unset;
        display: block;
        font-family: sans-serif;
        font-size: calc(var(--label_height) * 0.1);
    }

    :global(html), :global(body) {       
        margin: unset; 
        width: 100%;
        height: 100%;
        overscroll-behavior: none;
    }

    :global(body) {
        background-color: black;
        background-image: url('https://th.bing.com/th/id/R.c10e4787b6b971e9484f41f973337502?rik=np1%2bGEwnkeTk1w');
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

    .object {
        margin-left: 0.8vmin;
        margin-top: 0.8vmin;
        border-radius: 0.5vmin;
        background-color: rgb(255, 255, 255);
    }

    .button {
        margin-left: 0.6vmin;
        margin-top: 0.6vmin;
        border-radius: 0.25vmin;
        font-weight: bold;
        text-align: center;
        color: rgb(0, 0, 0);
        background-color: rgba(220, 220, 220, 0.8);
    }

    .button:hover {
        background-color: rgba(230, 230, 230, 0.8);;
    }

    .button:active {
        background-color: rgba(210, 210, 210, 0.8);
    }

    .container {
        float: left;
        margin-left: 1vmin;
        margin-top: 1vmin;
        border-radius: 1vmin;
        background-color: rgba(40, 40, 40, 0.8);
    }
    /* */

    @media screen and (orientation:portrait) {
        :root {
            --label_height: calc(20vw - 2.5vmin * 0.975);
        }

        #left_div, #right_div {
            width: 100%;
            height: 50%;
        }

        #history_container {
            height: calc(100% - 20vw - 2vmin);
        }

        #input_container, #history_container, #list_container, #output_container {
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

        #history_container {
            height: calc(100% - 10vw - 3vmin);
        }

        #input_container, #history_container, #list_container, #output_container {
            width: calc(100% - 1.5vmin);
        }

        #list_container, #output_container {
            margin-left: 0.5vmin;
        }
    }

    #background_cover {
        position: absolute;
        background-color: rgba(255, 255, 255, .15);  
        backdrop-filter: blur(4vmin);
    }

    #left_div, #right_div {
        float: left;
        opacity: 85%;
    }

    /* input & list */
    #input_container {
        aspect-ratio: 5 / 1;
    }
    #input {
        width: calc(100% - 1.6vmin);
        height: calc(100% - 1.6vmin);
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
        font-size: calc(var(--label_height) * 0.21);
    }
    .input_field_small, .list_item_field_small {
        height: 18.5%;
        font-size: calc(var(--label_height) * 0.185);
    }
    #input_count, #input_add, .list_item_count, .list_item_delete {
        float: left;
        width: calc(10% - 0.9vmin);
        height: calc(60% - 0.9vmin);
    }
    #input_add, .list_item_delete {
        height: calc(40% - 0.9vmin);
    }
    .list_item {
        width: calc(100% - 1.6vmin);
        aspect-ratio: 5 / 1;
    }
    #list_container {
        height: calc(80% - 1.5vmin);
        overflow-y: scroll;
    }
    /* */

    /* history */
    #history_container {
        overflow-y: scroll;
    }
    .history_item {
        width: calc(100% - 1.6vmin);
        aspect-ratio: 6 / 1;
        opacity: 0.85;
    }
    .history_item_fields {
        float: left;
        height: 100%;
        width: calc(90% - 0.3vmin);
    }
    .history_item_field {
        height: 25%;
        width: 100%;
    }
    .history_item_use, .history_item_delete {
        float: left;
        width: calc(10% - 0.9vmin);
        height: calc(60% - 0.9vmin);
    }
    .history_item_delete {
        height: calc(40% - 1vmin);
    }
    /* */

    /* output */
    #output_container {
        height: calc(20% - 1.5vmin);
    }
    #output_main, #output_other {
        float: left;
        height: calc(100% - 1.6vmin);
        width: calc(20% - 0.9vmin);
    }
    #output_other {
        width: calc(80% - 0.9vmin);
    }
    #output_submit, #output_clear_list, #output_options {
        height: calc(50% - 1vmin);
        width: calc(100% - 1.2vmin);
    }
    #output_options {
        float: right;
        margin-right: 0.8vmin;
        width: calc(20% - 1.6vmin);
    }
    /* */

    /* options */
    #options_container {
        width: calc(100% - 2vmin);
        height: calc(100% - 2vmin);
    }
    /* */

    #style {
        width: calc(100% - 1.6vmin);
        aspect-ratio: 3 / 1;
    }

    .style_field {
        float: left;
        width: 100%;
    }

    #style_underline {
        
    }

    .style_option {
        float: left;
    }
</style>

<script lang='ts'>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    import { PDFDocument, degrees } from '@pdfme/pdf-lib';
    import { generate } from '@pdfme/generator';
    import type { BlankPdf, Template, Font } from '@pdfme/common';
    import { text, barcodes, image } from '@pdfme/schemas';

    type history_item = {
        'field1': string,
        'field2': string,
        'field3': string,
        'field4': string
    };
    const history = writable<{[key: string]: history_item}>({});

    type list_item = {
        'field1': string,
        'field2': string,
        'field3': string,
        'field4': string,
        'field5': string,
        'count': string // can't bind to select unless this is a string
    };
    const list = writable<{[key: string]: list_item}>({});

    type options_type = {
        'rotation': number,
        'qrcode': string,
        'logo': string,
        'use_logo': boolean,
        'last_field5': string,
    };
    const options = writable({} as options_type);
    
    const fonts = writable<{[key: string]: { 'data': string, 'fallback': boolean }}>({});

    type style_item = {
        'font_name': string,
        'field_height': number,
        'underline': boolean
    }
    const style = writable<{[key: string]: style_item}>({});

    type input_elements_type = {
        'qrcode': HTMLInputElement,
        'logo': HTMLInputElement,
        'field1': HTMLInputElement,
        'field2': HTMLInputElement,
        'field3': HTMLInputElement,
        'field4': HTMLInputElement,
        'field5': HTMLInputElement,
        'count': HTMLInputElement
    };
    let input_elements: input_elements_type;

    onMount(() => {
        // restore values from localStorage if exist
        if (localStorage.history) { $history = JSON.parse(localStorage.history); } else { $history = {}; };
        if (localStorage.list) { $list = JSON.parse(localStorage.list); } else { $list = {}; };
        if (localStorage.options) { $options = JSON.parse(localStorage.options); } else { $options = <options_type>{}; };
        if (localStorage.fonts) { $fonts = JSON.parse(localStorage.fonts); } else {
            fetch('./Montserrat-Regular.ttf').then((response) => response.blob().then((blob) => {
                const reader = new FileReader();
                reader.onload = function() {
                    if (reader.result && typeof(reader.result) === 'string') {
                        $fonts = {
                            'Montserrat': {
                                'data': reader.result,
                                'fallback': true
                            }
                        };
                    };
                };

                reader.readAsDataURL(blob);
            }));
        };
        if (localStorage.style) { $style = JSON.parse(localStorage.style); } else {
            ['field1', 'field2', 'field3', 'field4', 'field5'].forEach(field => {
                $style[field] = {
                    'font_name': 'Montserrat',
                    'field_height': 3.5,
                    'underline': false
                };
            });

            ['field4', 'field5'].forEach(field => {
                $style[field].field_height = 2.75;
            });
        };

        list.subscribe((value) => localStorage.list = JSON.stringify(value));
        history.subscribe((value) => localStorage.history = JSON.stringify(value));
        options.subscribe((value) => localStorage.options = JSON.stringify(value));
        fonts.subscribe((value) => localStorage.fonts = JSON.stringify(value));
        style.subscribe((value) => localStorage.style = JSON.stringify(value));

        input_elements = {
            'qrcode': (document.getElementById('input_qrcode') as HTMLInputElement),
            'logo': (document.getElementById('input_logo') as HTMLInputElement),
            'field1': (document.getElementById('input_field1') as HTMLInputElement),
            'field2': (document.getElementById('input_field2') as HTMLInputElement),
            'field3': (document.getElementById('input_field3') as HTMLInputElement),
            'field4': (document.getElementById('input_field4') as HTMLInputElement),
            'field5': (document.getElementById('input_field5') as HTMLInputElement),
            'count': (document.getElementById('input_count') as HTMLInputElement)
        };

        if ($options.last_field5) { input_elements.field5.value = $options.last_field5; };

        if ($options.logo) { (document.getElementById('input_logo_image') as HTMLImageElement).src = $options.logo };
        if ($options.use_logo) {
            input_elements.qrcode.classList.add('hidden');
            input_elements.logo.classList.remove('hidden');
        }
    });

    function addItem() {
        if (input_elements.field5.value) {
            $options.last_field5 = input_elements.field5.value;
        }

        // there must be a better way of doing this
        const input_values_combined = input_elements.field1.value + input_elements.field2.value + input_elements.field3.value + input_elements.field4.value;
        
        // check if already exists in history
        let history_item_flagged: history_item | null = null;
        Object.entries($history).forEach(([id, item]) => {
            const history_item_values_combined = item.field1 + item.field2 + item.field3 + item.field4;

            if (history_item_values_combined === input_values_combined) { history_item_flagged = item }
        })

        if (!history_item_flagged) {
            const history_item_id = Math.random().toString(16).substring(2, 16); // https://dev.to/oyetoket/fastest-way-to-generate-random-strings-in-javascript-2k5a

            $history[history_item_id] = {
                'field1': input_elements.field1.value,
                'field2': input_elements.field2.value,
                'field3': input_elements.field3.value,
                'field4': input_elements.field4.value
            };;
        }
        
        // check if already exists in list
        let list_item_flagged: [string, list_item] | undefined;
        Object.entries($list).forEach(([id, item]) => {
            const list_item_values_combined = item.field1 + item.field2 + item.field3 + item.field4;

            if (list_item_values_combined === input_values_combined) { list_item_flagged = [id, item] }
        })

        if (!list_item_flagged) {
            const list_item_id = Math.random().toString(16).substring(2, 16); // https://dev.to/oyetoket/fastest-way-to-generate-random-strings-in-javascript-2k5a

            $list[list_item_id] = {
                'field1': input_elements.field1.value,
                'field2': input_elements.field2.value,
                'field3': input_elements.field3.value,
                'field4': input_elements.field4.value,
                'field5': input_elements.field5.value,
                'count': input_elements.count.value
            };
        }
        else {
            const counts_combined = Number($list[list_item_flagged[0]].count) + Number(input_elements.count.value);

            // cap at 99
            if (counts_combined < 100) {
                $list[list_item_flagged[0]].count = String(counts_combined);
            }
            else {
                $list[list_item_flagged[0]].count = String(99);
            }
        }

        input_elements.field1.value = '';
        input_elements.field2.value = '';
        input_elements.field3.value = '';
        input_elements.field4.value = '';
    }

    function deleteItem(element: EventTarget & HTMLInputElement) {
        if (element.parentElement?.classList.contains('list_item')) {
            delete $list[element.parentElement?.id as string]

            $list = $list; // force refresh
        }
        else if (element.parentElement?.classList.contains('history_item')) {
            delete $history[element.parentElement?.id as string]

            $history = $history;
        }
    }
    
    function useHistory(element: EventTarget & HTMLInputElement) {
        const historyEntry = $history[element.parentElement?.id as string];

        input_elements.field1.value = historyEntry.field1;
        input_elements.field2.value = historyEntry.field2;
        input_elements.field3.value = historyEntry.field3;
        input_elements.field4.value = historyEntry.field4;
    }

    function editQrcode() {
        const newQrcode: string | null = prompt('Enter QR Code value', $options.qrcode);
    
        if (newQrcode) {
            $options.qrcode = newQrcode;
        }
    }

    function editLogo(element: EventTarget & HTMLInputElement) {
        if (element.files) {
            const file = element.files[0];

            if (file.size > 5000000) {
                alert('Image too large (>5MB)');

                return;
            }

            if (file.type === 'image/png' || file.type === 'image/jpeg') {
                const reader = new FileReader();
                reader.onload = function() {
                    if (reader.result && typeof(reader.result) === 'string') {
                        const result: string = reader.result;

                        (document.getElementById('input_logo_image') as HTMLImageElement).src = result;
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
            const file = element.files[0];

            if (file.size > 2000000) {
                alert('Font too large (>5MB)');

                return;
            }
            else if ($fonts[file.name]) {
                alert('Font already in list');

                return;
            }

            if (['.ttf', '.otf', '.woff', '.woff2'].includes(file.name.slice(file.name.lastIndexOf('.'), file.name.length))) {
                const reader = new FileReader();
                reader.onload = function() {
                    if (reader.result && typeof(reader.result) === 'string') {
                        const result: string = reader.result;

                        $fonts[file.name] = {
                            'data': result,
                            'fallback': false
                        };
                    }
                }

                reader.readAsDataURL(file);
            }
        }
    }

    function handlePaste(event: Event) {
        const input_event = event as InputEvent;

        if (input_event.inputType === 'insertFromPaste') {
            let data_formatted: string[] = [];

            // new line
            if (input_event.data?.includes('\n')) {
                data_formatted = input_event.data?.split('\n');
            }
            // tab
            else if (input_event.data?.includes('	')) {
                data_formatted = input_event.data?.split('	');
            }
            

            for (let i in data_formatted.slice(0, 5)) {
                const input_elements_fields = [input_elements.field1, input_elements.field2, input_elements.field3, input_elements.field4, input_elements.field5];
                if (data_formatted[i]) {
                    input_elements_fields[i].value = data_formatted[i];
                }
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

    function swapStyleTab(new_tab: HTMLElement, field: string) {
        Object.entries(document.getElementsByClassName('style_tab')).forEach(([i, element]) => {
            element.classList.remove('style_tab_active');
        })

        new_tab.classList.add('style_tab_active');

        const option_font_element = document.getElementById('option_font') as HTMLInputElement;
        if ($style[field].font_name) {
            option_font_element.value = $style[field].font_name;
        }
        else {
            option_font_element.value = '';
        }
        
        const style_size_element = document.getElementById('style_size') as HTMLInputElement;
        if ($style[field].field_height) {
            style_size_element.value = String($style[field].field_height);
        }
        else {
            style_size_element.value = '';
        }

        const style_underline_element = document.getElementById('style_underline') as HTMLInputElement;
        if ($style[field].underline) {
            style_underline_element.value = String($style[field].underline);
        }
        else {
            style_underline_element.value = '';
        }
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
                        type: 'qrcode',
                        position: {
                            x: 2,
                            y: 2
                        },
                        width: 16,
                        height: 16
                    },
                    logoField: {
                        type: 'image',
                        position: {
                            x: 2,
                            y: 2
                        },
                        width: 16,
                        height: 16
                    },
                    textField1: {
                        type: 'text',
                        position: {
                            x: 20,
                            y: 0.5
                        },
                        width: 80,
                        height: $style.field1.field_height,
                        fontName: $style.field1.font_name,
                        dynamicFontSize: {
                            'min': 1,
                            'max': 100,
                            'fit': 'vertical'
                        },
                        underline: $style.field1.underline
                    },
                    textField2: {
                        type: 'text',
                        position: {
                            x: 20,
                            y: 0.5 * 2 + $style.field1.field_height
                        },
                        width: 80,
                        height: $style.field2.field_height,
                        fontName: $style.field2.font_name,
                        dynamicFontSize: {
                            'min': 1,
                            'max': 100,
                            'fit': 'vertical'
                        },
                        underline: $style.field2.underline
                    },
                    textField3: {
                        type: 'text',
                        position: {
                            x: 20,
                            y: 0.5 * 3 + $style.field1.field_height + $style.field2.field_height
                        },
                        width: 80,
                        height: $style.field3.field_height,
                        fontName: $style.field3.font_name,
                        dynamicFontSize: {
                            'min': 1,
                            'max': 100,
                            'fit': 'vertical'
                        },
                        underline: $style.field3.underline
                    },
                    textField4: {
                        type: 'text',
                        position: {
                            x: 20,
                            y: 0.5 * 4 + $style.field1.field_height + $style.field2.field_height + $style.field3.field_height
                        },
                        width: 80,
                        height: $style.field4.field_height,
                        fontName: $style.field4.font_name,
                        dynamicFontSize: {
                            'min': 1,
                            'max': 100,
                            'fit': 'vertical'
                        },
                        underline: $style.field4.underline
                    },
                    textField5: {
                        type: 'text',
                        position: {
                            x: 20,
                            y: 0.5 * 5 + $style.field1.field_height + $style.field2.field_height + $style.field3.field_height + $style.field4.field_height
                        },
                        width: 80,
                        height: $style.field5.field_height,
                        fontName: $style.field5.font_name,
                        dynamicFontSize: {
                            'min': 1,
                            'max': 100,
                            'fit': 'vertical'
                        },
                        underline: $style.field5.underline
                    }
                }
            ]
        }

        const pdf = await PDFDocument.create();

        for (let i in Object.entries($list)) {
            let qrcode = '';
            let logo = '';
            
            if (!input_elements.logo.classList.contains('hidden') && $options.logo) {
                logo = $options.logo;
            }
            else if (!input_elements.qrcode.classList.contains('hidden') && $options.qrcode){
                qrcode = $options.qrcode;
            }

            const inputs_raw = Object.entries($list)[i][1];
            const inputs = [{
                qrcodeField: qrcode,
                logoField: logo,
                textField1: inputs_raw.field1,
                textField2: inputs_raw.field2,
                textField3: inputs_raw.field3,
                textField4: inputs_raw.field4,
                textField5: inputs_raw.field5
            }]

            const item_pdf = await generate({template, inputs, plugins: { text, qrcode: barcodes.qrcode, image }, options: { font: $fonts } });
            const item_pdf_buffer = await PDFDocument.load(item_pdf.buffer);
            const item_pdf_page = (await pdf.copyPages(item_pdf_buffer, [0]))[0];

            if ($options.rotation) {
                item_pdf_page.setRotation(degrees($options.rotation))
            }

            for (let n = 0; n < Number(inputs_raw.count); n++) {
                pdf.addPage(item_pdf_page);
            }
        }

        const pdf_buffer = await pdf.save();
        const blob = new Blob([pdf_buffer], { type: 'application/pdf' });

        window.location.href = URL.createObjectURL(blob);
    }
</script>
<link rel='preconnect' href='https://fonts.googleapis.com'>
<link href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap' rel='stylesheet'>
<div id='main_div' class='stretch'>
    <div id='background_cover' class='stretch'></div>
    <div id='left_div'>
        <div id='input_container' class='container'>
            <div id='input' class='object'>
                <div id='input_thumbnail'>
                    <input id='input_qrcode' type='image' src='./sampleqrcode.svg' alt='input qrcode' on:click={() => editQrcode()}>
                    <div id='input_logo' class='hidden'>
                        <img id='input_logo_image' class='stretch' alt='input logo'>
                        <input id='input_logo_button' type='file' accept='image/png, image/jpeg' on:change={(event) => editLogo(event.currentTarget)}>
                    </div>
                </div>
                <div id='input_fields'>
                    <input id='input_field1' class='input_field' placeholder='field1' on:input={(event) => handlePaste(event)}>
                    <input id='input_field2' class='input_field' placeholder='field2'>
                    <input id='input_field3' class='input_field' placeholder='field3'>
                    <input id='input_field4' class='input_field input_field_small' placeholder='field4'>
                    <input id='input_field5' class='input_field input_field_small' placeholder='field5'>
                </div>
                <select id='input_count' class='button'>
                    {#each Array.from(Array(100).keys()).slice(1, 100) as n}
                        <option value='{String(n)}'>{n}</option>
                    {/each}
                </select>
                <input id='input_add' class='button' type='button' value='add' on:click={() => addItem()}>
            </div>
        </div>
        <div id='history_container' class='container'>
            {#each Object.entries($history) as [id, item]}
            <div id={id} class='object history_item'>
                <div class='history_item_fields'>
                    <input id='field1' class='history_item_field' placeholder='field1' value={$history[id].field1} disabled>
                    <input id='field2' class='history_item_field' placeholder='field2' value={$history[id].field2} disabled>
                    <input id='field3' class='history_item_field' placeholder='field3' value={$history[id].field3} disabled>
                    <input id='field4' class='history_item_field history_item_field_small' placeholder='field4' value={$history[id].field4} disabled>
                </div>
                <input class='button history_item_use' type='button' value='use' on:click={(event) => useHistory(event.currentTarget)}>
                <input class='button history_item_delete' type='button' value='delete' on:click={(event) => deleteItem(event.currentTarget)}>
            </div>
            {/each}
        </div>
    </div>
    <div id='right_div'>
        <div id='list_container' class='container'>
            {#each Object.entries($list) as [id, item]}
            <div id={id} class='object list_item'>
                <div class='list_item_thumbnail'>
                    <img class='list_item_qrcode' src='./sampleqrcode.svg' alt='list item qrcode' on:load={(event) => { if ($options.use_logo) { event.currentTarget.classList.add('hidden'); } }}>
                    <img class='list_item_logo hidden' src={$options.logo} alt='list item logo' on:load={(event) => { if ($options.use_logo) { event.currentTarget.classList.remove('hidden'); } }}>
                </div>
                <div class='list_item_fields'>
                    <input class='list_item_field' bind:value={$list[id].field1}>
                    <input class='list_item_field' bind:value={$list[id].field2}>
                    <input class='list_item_field' bind:value={$list[id].field3}>
                    <input class='list_item_field list_item_field_small' bind:value={$list[id].field4}>
                    <input class='list_item_field list_item_field_small' bind:value={$list[id].field5}>
                </div>
                <select id='count' class='button list_item_count' bind:value={$list[id].count}>
                    {#each Array.from(Array(100).keys()).slice(1, 100) as n}
                        <option value='{String(n)}'>{n}</option>
                    {/each}
                </select>
                <input class='button list_item_delete' type='button' value='delete' on:click={(event) => deleteItem(event.currentTarget)}>
            </div>
            {/each}
        </div>
        <div id='output_container' class='container'>
            <div id='output_main' class='object'>
                <input id='output_submit' class='button' type='button' value='Submit!' on:click={() => submit()}>
                <input id='output_clear_list' class='button' type='button' value='Clear list' on:click={() => { if (confirm("Clear list?")) { $list = {} } } }>
            </div>
            <div id='output_other' class='object'>
                <input id='output_options' class='button' type='button' value='Options' on:click={() => { document.getElementById('main_div')?.classList.add('hidden'); document.getElementById('options_div')?.classList.remove('hidden'); }}>
            </div>
        </div>
    </div>
</div>
<div id='options_div' class='stretch hidden'>
    <div id='options_container' class='container'>
        <div id='style' class='object'>
            {#each Object.entries($style) as [field, data]}
                <div id='style_{field}' class='style_field'>
                    <select id='option_font' class='button style_option' bind:value={$style[field].font_name}>
                        {#each Object.entries($fonts) as [name, data]}
                            <option value='{name}'>{name}</option>
                        {/each}
                    </select>
                    <input id='style_size' class='button style_option' type='number' step='0.25' min='0' max='100' bind:value={$style[field].field_height}>
                </div>
            {/each}
        </div>
        <input id='option_font_button' class='button' type='file' on:change={(event) => uploadFont(event.currentTarget)}>

        <div id='option_thumbnail'>
            <input id='option_thumbnail_range' class='button' type='range' max='1' step='1' value='0' on:input={(event) => {
                let option_rotate_display_element = document.getElementById('option_thumbnail_display');
                if (option_rotate_display_element) {
                    if (event.currentTarget.value === '0') {
                        option_rotate_display_element.innerText = 'qrcode';
                    }
                    else {
                        option_rotate_display_element.innerText = 'logo';
                    }

                    useLogo(Boolean(Number(event.currentTarget.value)));
                }
            }}>
            <div id='option_thumbnail_display'></div>
        </div>
        <div id='option_rotate'>
            <input id='option_rotate_range' class='button' type='range' max='270' step='90' value='0' on:input={(event) => {
                let option_rotate_display_element = document.getElementById('option_rotate_display');
                if (option_rotate_display_element) {
                    option_rotate_display_element.innerText = event.currentTarget.value;
                }

                $options.rotation = Number(event.currentTarget.value);
            }}>
            <div id='option_rotate_display'></div>
        </div>
        
        <input id='option_export_history' class='button' type='button' value='Export History' disabled>
        <input id='option_export_list' class='button' type='button' value='Export list' disabled>
        
        <input id='option_reset' class='button' type='button' value='Reset' on:click={() => { if (confirm("Reset?")) { localStorage.clear(); location.reload(); } }}>

        <input id='option_return' class='button' type='button' value='Return' on:click={() => { document.getElementById('options_div')?.classList.add('hidden'); document.getElementById('main_div')?.classList.remove('hidden'); }}>
    </div>
</div>