alert("succes");
function calcTotal()
{
    const price=document.querySelectorAll('[data-ns-test="price"]');
    const total=Array.from(price).reduce((acc,current)=> acc+ +(current.textContent),0);
    const tbody=document.querySelector('tbody');
    const grandTotal =document.querySelector('[data-ns-test="grandTotal"]');
    if(grandTotal){
        grandTotal.parentNode.remove();
    }
    tbody.insertAdjacentHTML('beforeend',`<tr>
    <td>Grand Total</td>
    <td data-ns-test="grandTotal">${total}</td>
    </tr>`)
}