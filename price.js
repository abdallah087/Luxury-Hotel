function bookRoom(price, nightId, totalId) {
   
    let inputField = document.getElementById(nightId);
    let displayField = document.getElementById(totalId);

    
    let rawValue = inputField.value;
    
    
    let cleanValue = rawValue.replace(/[٠-٩]/g, d => d.charCodeAt(0) - 1632);
    
    let nights = parseInt(cleanValue);

    
    console.log("السعر:", price);
    console.log("عدد الليالي بعد التنظيف:", nights);

    
    if (!isNaN(nights) && nights > 0) {
        let total = price * nights;
        displayField.innerHTML = "Total Price: $" + total;
    } else {
        displayField.innerHTML = "يرجى كتابة رقم صحيح";
    }
}