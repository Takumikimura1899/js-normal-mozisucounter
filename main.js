const input = document.getElementById('sampleForm');
const count = document.getElementById('textCounter');
const reset = document.getElementById('resetBtn');
const iniDel = document.getElementById('iniDel');
const endDel = document.getElementById('endDel');
var textBox = null;

const finish = 400;

// テキストボックス内の処理
input.addEventListener('keyup', function() {
    console.log('押されました！');
    count.textContent = `あと${finish - input.value.length}文字`;
    textBox = input.value;
});

// リセットボタンの処理
reset.addEventListener('click', function() {
    count.textContent = `あと${finish}文字`;
});

// 頭文字削除の処理
iniDel.addEventListener('click', function() {
    if(input.value.length >= 1) {
        textBox = textBox.slice(1);
        input.value = textBox;
        count.textContent = `あと${finish - input.value.length}文字`;
    }
});

// 末尾削除
endDel.addEventListener('click', function() {
    if(input.value.length >= 1) {
        textBox = textBox.slice(0,-1);
        input.value = textBox;
        count.textContent = `あと${finish - input.value.length}文字`;
    }
});