//  HTTP Durum Kodları Nedir? Anlamları Nelerdir?
// "Hyper Text Transfer Protocol” ifadesinin kısaltması olan HTTP, Türkçede kendine "Köprü Metni Aktarım Protokolü” ya da
// "Hiper Metin Transfer Protokolü” şeklinde karşılık bulur. Evrensel kullanımı HTTP şeklindedir ve web üzerindeki mesajların,
//  biçim ve gönderim şeklini tanımlayan standart bir protokoldür.

// HTTP durum kodları (status codes) ise istemci yani web tarayıcı ile sunucu arasındaki iletişim sürecinde neler olduğunu açıklayan,
//  3 haneli bir sayıdır. Bu kodların genellikle hata ile ilgili olduğu düşünülür. Fakat kodlar sunucu ve istemci arasındaki aktarım
//  işleminin durumunu bildirir. Yani sadece hatalı olanların değil, başarılı işlemlerin de HTTP durum kodu vardır.

// HTTP durum kodları 5 gruba ayrılır. Bunlar:

// 1xx: Bilgi
// 2xx: Başarılı
// 3xx: Yönlendirme
// 4xx: İstemci Hatası
// 5xx: Sunucu Hatası

// 1xx Bilgi
// 100 Continue: İstemci, sunucuya isteğini gönderdiğini bildirir. Sunucu, isteği kabul ettiğini ve devam ettiğini bildirir.
// 101 Switching Protocols: İstemci, sunucuya isteğini gönderdiğini bildirir. Sunucu, isteği kabul ettiğini ve devam ettiğini bildirir.
// 102 Processing: Sunucu, isteği kabul ettiğini ve işlemeye başladığını bildirir.
// 103 Early Hints: Sunucu, isteğin işlenmesi için gerekli olan bilgileri gönderir.

// 2xx Başarılı
// 200 OK: İstek başarılı bir şekilde gerçekleştirildi.
// 201 Created: İstek başarılı bir şekilde gerçekleştirildi ve yeni bir kaynak oluşturuldu.
// 202 Accepted: İstek kabul edildi ancak işlenmedi.
// 203 Non-Authoritative Information: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi doğru olmayabilir.
// 204 No Content: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi yoktur.
// 205 Reset Content: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi yoktur. İstemci tarafında bir şeyleri
//  sıfırlamak için kullanılır.
// 206 Partial Content: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 207 Multi-Status: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 208 Already Reported: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 226 IM Used: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.

// 3xx Yönlendirme
// 300 Multiple Choices: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 301 Moved Permanently: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 302 Found: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 303 See Other: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 304 Not Modified: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 305 Use Proxy: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 306 Switch Proxy: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 307 Temporary Redirect: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 308 Permanent Redirect: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.

// 4xx İstemci Hatası
// 400 Bad Request: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 401 Unauthorized: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 402 Payment Required: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 403 Forbidden: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 404 Not Found: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 405 Method Not Allowed: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 406 Not Acceptable: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 407 Proxy Authentication Required: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 408 Request Timeout: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 409 Conflict: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 410 Gone: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 411 Length Required: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 412 Precondition Failed: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 413 Payload Too Large: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 414 URI Too Long: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 415 Unsupported Media Type: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 416 Range Not Satisfiable: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 417 Expectation Failed: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 418 I'm a teapot: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 421 Misdirected Request: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 422 Unprocessable Entity: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 423 Locked: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 424 Failed Dependency: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 425 Too Early: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 426 Upgrade Required: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 428 Precondition Required: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 429 Too Many Requests: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 431 Request Header Fields Too Large: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 451 Unavailable For Legal Reasons: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.

// 5xx Sunucu Hatası
// 500 Internal Server Error: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 501 Not Implemented: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 502 Bad Gateway: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 503 Service Unavailable: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 504 Gateway Timeout: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 505 HTTP Version Not Supported: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 506 Variant Also Negotiates: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 507 Insufficient Storage: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 508 Loop Detected: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 510 Not Extended: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.
// 511 Network Authentication Required: İstek başarılı bir şekilde gerçekleştirildi ancak dönen bilgi tam değildir.

// HTTP Request'in metodlari nelerdir?

// GET: Verileri almak için kullanılır.
// POST: Verileri göndermek için kullanılır.
// PUT: Verileri güncellemek için kullanılır.
// DELETE: Verileri silmek için kullanılır.
// HEAD: Verileri almak için kullanılır.
// OPTIONS: Verileri almak için kullanılır.
// TRACE: Verileri almak için kullanılır.
// CONNECT: Verileri almak için kullanılır.
// PATCH: Verileri güncellemek için kullanılır.

// Fetch API'nin metodlari ile örnekleri

// GET
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log(err))
  .finally(() => console.log('İşlem tamamlandı.'));

// POST
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// PUT
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// DELETE
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
})
  .then((response) => response.json())
  .then((json) => console.log(json));