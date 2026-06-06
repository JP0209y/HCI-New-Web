
var currentOrder={id:'',date:'',amount:'',status:''};

function showOrdersList(){
  document.getElementById('orders-list').style.display='block';
  document.getElementById('order-detail').style.display='none';
  document.getElementById('order-tracking').style.display='none';
}

function showOrderDetail(id,date,amount,status){
  currentOrder={id,date,amount,status};
  document.getElementById('orders-list').style.display='none';
  document.getElementById('order-detail').style.display='block';
  document.getElementById('order-tracking').style.display='none';
  document.getElementById('detail-breadcrumb').textContent='Order #'+id;
  document.getElementById('detail-order-id').textContent='Order #'+id;
  document.getElementById('detail-order-date').textContent='Placed on '+date;
  document.getElementById('detail-total').textContent=amount;
  document.getElementById('track-breadcrumb-order').textContent='Order #'+id;
  document.getElementById('track-order-id').textContent='Track Order #'+id;
}

function showTrackingPage(){
  document.getElementById('orders-list').style.display='none';
  document.getElementById('order-detail').style.display='none';
  document.getElementById('order-tracking').style.display='block';
  var stepOFD=document.getElementById('track-step-outfordelivery');
  if(currentOrder.status==='Delivered'){
    stepOFD.querySelector('.step-circle').className='step-circle done';
    stepOFD.querySelector('.step-circle').innerHTML='<i class="material-symbols-outlined">check</i>';
    stepOFD.querySelector('.step-line').className='step-line done';
    stepOFD.querySelector('.step-label').className='step-label done';
  }
}

document.querySelectorAll('.nav-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.tab-pane-custom').forEach(t=>t.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-'+btn.dataset.tab).classList.add('active');
    if(btn.dataset.tab==='orders') showOrdersList();
  });
});

document.getElementById('editProfileBtn').addEventListener('click',()=>{
  document.getElementById('nameInput').value=document.getElementById('nameDisplay').textContent;
  document.getElementById('emailInput').value=document.getElementById('emailDisplay').textContent;
  document.getElementById('phoneInput').value=document.getElementById('phoneDisplay').textContent;
  document.getElementById('profileDisplay').style.display='none';
  document.getElementById('profileForm').style.display='block';
});
document.getElementById('cancelEditBtn').addEventListener('click',()=>{
  document.getElementById('profileForm').style.display='none';
  document.getElementById('profileDisplay').style.display='block';
});
document.getElementById('saveProfileBtn').addEventListener('click',()=>{
  document.getElementById('nameDisplay').textContent=document.getElementById('nameInput').value;
  document.getElementById('emailDisplay').textContent=document.getElementById('emailInput').value;
  document.getElementById('phoneDisplay').textContent=document.getElementById('phoneInput').value;
  document.getElementById('profileForm').style.display='none';
  document.getElementById('profileDisplay').style.display='block';
});
document.getElementById('editAddressesBtn').addEventListener('click',()=>{
  document.getElementById('billingInput').value=document.getElementById('billingDisplay').textContent;
  document.getElementById('shippingInput').value=document.getElementById('shippingDisplay').textContent;
  document.getElementById('addrDisplay').style.display='none';
  document.getElementById('addrForm').style.display='block';
});
document.getElementById('cancelAddrBtn').addEventListener('click',()=>{
  document.getElementById('addrForm').style.display='none';
  document.getElementById('addrDisplay').style.display='block';
});
document.getElementById('saveAddrBtn').addEventListener('click',()=>{
  document.getElementById('billingDisplay').textContent=document.getElementById('billingInput').value;
  document.getElementById('shippingDisplay').textContent=document.getElementById('shippingInput').value;
  document.getElementById('addrForm').style.display='none';
  document.getElementById('addrDisplay').style.display='block';
});
