<!--
npm run dev -- --host
-->

<style>
    :global(html), :global(body) {
        margin: unset;
        width: 100%;
        height: 100%;
        background: rgb(75, 75, 75);
    }

    #left_div, #right_div {
        float: left;
        margin: 10px;
        width: calc(50% - 15px);
        height: calc(100% - 20px);
        background-color: rgb(58, 58, 58);
    }

    #right_div {
        margin-left: 0px;
    }

    /* input */
    #input {
        width: 100%;
        aspect-ratio: 5 / 1;
        border-radius: 10px;
        background-color: rgb(43, 43, 43);
    }

    #input_thumbnail {
        float: left;
        height: 100%;
    }
    #input_fields {
        float: left;
        height: 100%;
        width: 70%;
    }
    .input_field {
        display: block;
        border: unset;
        padding: unset;
        height: 20%;
        width: 100%;
        background-color: unset;
        color: white;
    }
    #input_count {
        float: left;
        margin-bottom: 10px;
        border: unset;
        padding: unset;
        width: 10%;
        height: calc(60% - 5px);
        background-color: rgb(66, 66, 66);
        color: white;
    }
    #input_add {
        float: left;
        border: unset;
        padding: unset;
        width: 10%;
        height: calc(40% - 5px);
        background-color: rgb(66, 66, 66);
        color: white;
    }

    /* history */
    #history {

    }

    .list_item {
        width: calc(100% - 20px);
        margin: 10px;
        aspect-ratio: 5 / 1;
        border-radius: 5px;
        background-color: rgb(37, 37, 37);
    }
    .list_item_thumbnail {
        float: left;
        height: 100%;
    }
    .list_item_fields {
        float: left;
        height: 100%;
        width: 70%;
    }
    .list_item_field {
        display: block;
        border: unset;
        padding: unset;
        height: 20%;
        width: 100%;
        background-color: unset;
        color: white;
    }
    .list_item_count {
        float: left;
        margin-bottom: 10px;
        border: unset;
        padding: unset;
        width: 10%;
        height: calc(60% - 5px);
        border-radius: 5px;
        background-color: rgb(66, 66, 66);
        color: white;
    }
    .list_item_delete {
        float: left;
        border: unset;
        padding: unset;
        width: 10%;
        height: calc(40% - 5px);
        border-radius: 5px;
        background-color: rgb(66, 66, 66);
        color: white;
    }
</style>

<script lang="ts">
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    // import { PDFDocument, degrees } from 'pdf-lib';
    // import { generate } from '@pdfme/generator';

    type history_item = {
        "field1": string,
        "field2": string,
        "field3": string,
        "field4": string
    };
    type history_type = {[key: string] : history_item}
    const history = writable<history_type>({});

    type list_item = {
        "thumbnail": string,
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
        "thumbnail": HTMLImageElement,
        "field1": HTMLInputElement,
        "field2": HTMLInputElement,
        "field3": HTMLInputElement,
        "field4": HTMLInputElement,
        "field5": HTMLInputElement,
        "count": HTMLInputElement
    };
    let input_elements: input_elements_type;

    onMount(() => {
        // restore values from localStorage if exist
        if (localStorage.history) { $history = JSON.parse(localStorage.history); } else { $history = {}; };
        if (localStorage.list) { $list = JSON.parse(localStorage.list); } else { $list = {}; };
        if (localStorage.lastField5) { (document.getElementById('input_field5') as HTMLInputElement).value = localStorage.lastField5; }

        list.subscribe((value) => localStorage.list = JSON.stringify(value));
        history.subscribe((value) => localStorage.history = JSON.stringify(value));

        input_elements = {
        "thumbnail": (document.getElementById('input_thumbnail') as HTMLImageElement),
        "field1": (document.getElementById('input_field1') as HTMLInputElement),
        "field2": (document.getElementById('input_field2') as HTMLInputElement),
        "field3": (document.getElementById('input_field3') as HTMLInputElement),
        "field4": (document.getElementById('input_field4') as HTMLInputElement),
        "field5": (document.getElementById('input_field5') as HTMLInputElement),
        "count": (document.getElementById('input_count') as HTMLInputElement)
        };
    });

    function addItem() {
        let input_values = {
            "thumbnail": (input_elements.thumbnail).src,
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
        let history_item_flagged: [string, history_item] | null = null;
        Object.entries($history).forEach(item => {
            let history_item_thing = item[1].field1 + item[1].field2 + item[1].field3 + item[1].field4;

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
        Object.entries($list).forEach(thing => {
            let list_item_thing = thing[1].field1 + thing[1].field2 + thing[1].field3 + thing[1].field4;

            if (list_item_thing === input_values_thing) { list_item_flagged = thing }
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
        let thing = $history[element.parentElement?.id as string];

        input_elements.field1.value = thing.field1;
        input_elements.field2.value = thing.field2;
        input_elements.field3.value = thing.field3;
        input_elements.field4.value = thing.field4;
    }
</script>

<!--
<button on:click={() => console.log(localStorage)}>localStorage</button>
<button on:click={() => console.log($list)}>$list</button>
<button on:click={() => localStorage.clear()}>clear</button>
-->

<div id="left_div">
    <div id="input">
        <img id="input_thumbnail" src="https://piro.sh/fromg.png" alt="input item thumbnail">
        <div id="input_fields">
            <input id="input_field1" class="input_field input_field_large" placeholder="field1">
            <input id="input_field2" class="input_field input_field_medium" placeholder="field2">
            <input id="input_field3" class="input_field input_field_medium" placeholder="field3">
            <input id="input_field4" class="input_field input_field_medium" placeholder="field4">
            <input id="input_field5" class="input_field input_field_small" placeholder="field5">
        </div>
        <select id="input_count">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
            <option value="32">32</option>
            <option value="33">33</option>
            <option value="34">34</option>
            <option value="35">35</option>
            <option value="36">36</option>
            <option value="37">37</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
            <option value="41">41</option>
            <option value="42">42</option>
            <option value="43">43</option>
            <option value="44">44</option>
            <option value="45">45</option>
            <option value="46">46</option>
            <option value="47">47</option>
            <option value="48">48</option>
            <option value="49">49</option>
            <option value="50">50</option>
            <option value="51">51</option>
            <option value="52">52</option>
            <option value="53">53</option>
            <option value="54">54</option>
            <option value="55">55</option>
            <option value="56">56</option>
            <option value="57">57</option>
            <option value="58">58</option>
            <option value="59">59</option>
            <option value="60">60</option>
            <option value="61">61</option>
            <option value="62">62</option>
            <option value="63">63</option>
            <option value="64">64</option>
            <option value="65">65</option>
            <option value="66">66</option>
            <option value="67">67</option>
            <option value="68">68</option>
            <option value="69">69</option>
            <option value="70">70</option>
            <option value="71">71</option>
            <option value="72">72</option>
            <option value="73">73</option>
            <option value="74">74</option>
            <option value="75">75</option>
            <option value="76">76</option>
            <option value="77">77</option>
            <option value="78">78</option>
            <option value="79">79</option>
            <option value="80">80</option>
            <option value="81">81</option>
            <option value="82">82</option>
            <option value="83">83</option>
            <option value="84">84</option>
            <option value="85">85</option>
            <option value="86">86</option>
            <option value="87">87</option>
            <option value="88">88</option>
            <option value="89">89</option>
            <option value="90">90</option>
            <option value="91">91</option>
            <option value="92">92</option>
            <option value="93">93</option>
            <option value="94">94</option>
            <option value="95">95</option>
            <option value="96">96</option>
            <option value="97">97</option>
            <option value="98">98</option>
            <option value="99">99</option>
        </select>
        <input id="input_add" type="button" value="add" on:click={() => addItem()}>
    </div>
    <div id="history">
        {#each Object.entries($history) as [id, item]}
        <div id={id} class="history_item">
            <div class="history_item_fields">
                <input id="field1" class="history_item_field history_item_field_large" placeholder="field1" value={$history[id].field1}>
                <input id="field2" class="history_item_field history_item_field_medium" placeholder="field2" value={$history[id].field2}>
                <input id="field3" class="history_item_field history_item_field_medium" placeholder="field3" value={$history[id].field3}>
                <input id="field4" class="history_item_field history_item_field_medium" placeholder="field4" value={$history[id].field4}>
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
            <img id="thumbnail" class="list_item_thumbnail" src="https://piro.sh/fromg.png" alt="list item thumbnail">
            <div class="list_item_fields">
                <input id="field1" class="list_item_field list_item_field_large" placeholder="field1" bind:value={$list[id].field1}>
                <input id="field2" class="list_item_field list_item_field_medium" placeholder="field2" bind:value={$list[id].field2}>
                <input id="field3" class="list_item_field list_item_field_medium" placeholder="field3" bind:value={$list[id].field3}>
                <input id="field4" class="list_item_field list_item_field_medium" placeholder="field4" bind:value={$list[id].field4}>
                <input id="field5" class="list_item_field list_item_field_small" placeholder="field5" bind:value={$list[id].field5}>
            </div>
            <select id="count" class="list_item_count" bind:value={$list[id].count}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
                <option value="32">32</option>
                <option value="33">33</option>
                <option value="34">34</option>
                <option value="35">35</option>
                <option value="36">36</option>
                <option value="37">37</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">43</option>
                <option value="44">44</option>
                <option value="45">45</option>
                <option value="46">46</option>
                <option value="47">47</option>
                <option value="48">48</option>
                <option value="49">49</option>
                <option value="50">50</option>
                <option value="51">51</option>
                <option value="52">52</option>
                <option value="53">53</option>
                <option value="54">54</option>
                <option value="55">55</option>
                <option value="56">56</option>
                <option value="57">57</option>
                <option value="58">58</option>
                <option value="59">59</option>
                <option value="60">60</option>
                <option value="61">61</option>
                <option value="62">62</option>
                <option value="63">63</option>
                <option value="64">64</option>
                <option value="65">65</option>
                <option value="66">66</option>
                <option value="67">67</option>
                <option value="68">68</option>
                <option value="69">69</option>
                <option value="70">70</option>
                <option value="71">71</option>
                <option value="72">72</option>
                <option value="73">73</option>
                <option value="74">74</option>
                <option value="75">75</option>
                <option value="76">76</option>
                <option value="77">77</option>
                <option value="78">78</option>
                <option value="79">79</option>
                <option value="80">80</option>
                <option value="81">81</option>
                <option value="82">82</option>
                <option value="83">83</option>
                <option value="84">84</option>
                <option value="85">85</option>
                <option value="86">86</option>
                <option value="87">87</option>
                <option value="88">88</option>
                <option value="89">89</option>
                <option value="90">90</option>
                <option value="91">91</option>
                <option value="92">92</option>
                <option value="93">93</option>
                <option value="94">94</option>
                <option value="95">95</option>
                <option value="96">96</option>
                <option value="97">97</option>
                <option value="98">98</option>
                <option value="99">99</option>
            </select>
            <input class="list_item_delete" type="button" value="delete" on:click={(event) => deleteItem(event.currentTarget)}>
        </div>
        {/each}
    </div>
</div>