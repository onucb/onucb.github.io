const input = document.getElementById('txt');
window.hash = {
                  acthash: "a157c720c2459e0066b6e0bea9d3f0de"
                };
function search69() {
                var text = document.getElementById('txt').value;
                     if (MD5(input.value)==hash.acthash) { 
                       localStorage.removeItem('pass');
                       localStorage.setItem('pass', JSON.stringify(hash.acthash));
                       location.href='/apps/';
                     } else {
                       alert('📵 НЕправильный Пароль‼️ Пароль ДОЛЖЕН быть БЕЗ пробела в начале и конце‼️');
                       localStorage.removeItem('pass');
                       localStorage.setItem('pass', JSON.stringify("Kynu nognucky uJlu noLLIeJl Haxyū")); 
                     }
              };
              $(document).ready(function() {
                $("#txt").keypress(function(e) {
                  if (e.keyCode == 13) {
                    //нажата клавиша enter - здесь ваш код
                    search69();
                  }
                });
              });
