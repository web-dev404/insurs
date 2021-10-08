'use strict';

document.addEventListener('DOMContentLoaded', () => {
   const trackBtn = document.querySelectorAll('#track-btn'),
   	trackInput = document.querySelector('#track-input'),
   	contentInner = document.querySelector('.content__inner'),
   	contentText = document.querySelector('.content__text'),
   	form1Btn = document.querySelector('.form1__btn'),
   	form1HiddenBtn = document.querySelectorAll('.form1__hidden-btn');
   
   const hiddenTextObj = {
   	success: 'Поздравляем! Ваш полис найден в системе',
   	failure: 'Ваш полис не найден в системе. Проверьте номер договора'
   };
   
   trackBtn.forEach(item => {
   	item.addEventListener('click', (e) => {
   		e.preventDefault();
   		if (Number(trackInput.value) === 1234) {
   			contentText.classList.remove('failure');
   			contentText.classList.add('success');
   			trackInput.classList.remove('failure');
   			trackInput.classList.add('success');
   			contentText.innerText = hiddenTextObj.success;
   			form1Btn.classList.remove('active');
   			form1HiddenBtn.forEach(item => {
   				item.classList.add('active');
   			});
   		} else {
   			contentText.classList.remove('success');
   			contentText.classList.add('failure');
   			trackInput.classList.remove('success');
   			trackInput.classList.add('failure');
   			contentText.innerText = hiddenTextObj.failure;
   		}
   	});
   });
   const step2 = document.querySelector('.step2'),
   	detailsBtn = document.querySelector('#details-btn');
   
   detailsBtn.addEventListener('click', (e) => {
   	e.preventDefault();
   	step2.classList.add('active');
   });
   const modal = document.querySelector('.modal'),
   	modalTrigger = document.querySelector('.step2-btn'),
   	body = document.querySelector('body'),
   	step2Input = document.querySelector('.step2__input'),
   	step2HiddenText = document.querySelector('.step2-hidden-text'),
   	modalInput = document.querySelector('.modal__input'),
   	modalBtn = document.querySelector('.modal__btn'),
   	info = document.querySelector('.info');
   
   function openModalWindow() {
   	modal.classList.add('active');
   	body.classList.add('active-body');
   }
   
   function closeModalWindow() {
   	modal.classList.remove('active');
   	body.classList.remove('active-body');
   }
   
   modalTrigger.addEventListener('click', (e) => {
   	e.preventDefault();
   
   	if (step2Input.value) {
   		step2HiddenText.classList.remove('active');
   		openModalWindow();
   	} else {
   		step2HiddenText.classList.add('active');
   	}
   });
   
   modal.addEventListener('click', (e) => {
   	const target = e.target;
   
   	if ((target === modal) || (target.classList.contains('modal__close'))) {
   		closeModalWindow();
   	}
   });
   
   modalInput.addEventListener('input', () => {
   	if (modalInput.value) {
   		modalBtn.classList.add('active');
   	} else {
   		modalBtn.classList.remove('active');
   	}
   });
   
   modalBtn.addEventListener('click', (e) => {
   	e.preventDefault();
   	step2.classList.remove('active');
   	closeModalWindow();
   	info.classList.add('active');
   });
   const nav = document.querySelector('.nav'),
       headerMain = document.querySelector('.header__main'),
       checkbox = document.querySelector('.checkbox1'),
       header = document.querySelector('.header'),
       headerInner = document.querySelector('.header__inner'),
       burger = document.querySelector('.checkbox1-label');
   
   checkbox.addEventListener('click', () => {
       nav.classList.toggle('active');
       body.classList.toggle('active-body');
       headerMain.classList.toggle('active');
       header.classList.toggle('active');
       headerInner.classList.toggle('active');
       burger.classList.toggle('active');
   });
});