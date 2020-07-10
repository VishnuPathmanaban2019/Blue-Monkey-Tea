//Validate Function for Mailing List Form
function validate()
{
    //Checks email validity
    var email = $("#email").val();
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false)
    {
        alert("Email is not valid or not in a valid format.");
        return false;
    }
    //Checks if zipcode length is 5 digits
    var zipcode = $("#zipcode").val();
    if((zipcode.length != 5 || isNaN(zipcode)) && zipcode != "")
    {
        alert("Zip code is not valid or not in a valid format.");
        return false;
    }
}