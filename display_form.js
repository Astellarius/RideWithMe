function displayForm() {

    var f_form_num = document.getElementById("form_num").innerHTML;
    var form_start_value = document.getElementById("form_start").value;
    var form_end_value = document.getElementById("form_end").value;

    print_text( form_start_value, "start", f_form_num );
    print_text( form_end_value, "end", f_form_num );

    store_form( form_start_value, "start", f_form_num );
    store_form( form_end_value, "end", f_form_num );

    document.getElementById("form_num").innerHTML = parseInt(f_form_num) + 1;
    // set #0 to #1

} // displayForm


function print_text( input_value, position, p_form_num ) {
    var para = document.createElement("p");
    para.id = position + p_form_num; // every node created will have a unique id, accessible for all functions.

    var node = document.createTextNode(input_value);
    para.appendChild(node);

    var element = document.getElementById("directions"); // whatever prints out the current directions
    element.appendChild(para);
} // print text


function store_form( input_value, position, p_form_num ) {

    if( position == "start" )
        START_ARRAY[p_form_num] = [input_value, position, p_form_num];
    else
        END_ARRAY[p_form_num] = [input_value, position, p_form_num];

} // store form