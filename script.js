function compute()
{
    var n = document.getElementById("moles");
    var eCell = document.getElementById("cell");
    

    var g = -1* n.value * 96485 * eCell.value;
    var p1 = "For the given Values , Gibbs Free Energy is eqaul to  "+ g +" J.";
    document.getElementById("p1").innerHTML = p1;
}