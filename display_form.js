function displayForm() {

    var f_form_num = document.getElementById("form_num").innerHTML;
    print_text( "form_start", "start", f_form_num );
    print_text( "form_end", "end", f_form_num );
    // prints whatever was in the input fields

    document.getElementById("form_num").innerHTML = parseInt(f_form_num) + 1;
    // set #0 to #1

} // displayForm

function print_text( input_id, position, p_form_num ) {
    var para = document.createElement("p");
    para.id = position + p_form_num; // every node created will have a unique id, accessible for all functions.

    var node = document.createTextNode( document.getElementById(input_id).value );
    para.appendChild(node);

    var element = document.getElementById("directions"); // whatever prints out the current directions
    element.appendChild(para);
} // print text