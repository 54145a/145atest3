(async () => {
    if (!window.WebAssembly) {
        let e = document.createElement('div');
        e.textContent = 'WebAssembly is not supported on your browser! Please upgrade your browser to the latest version.';
        e.style.position = 'absolute';
        e.style.top = '0';
        e.style.width = '100%';
        e.style.padding = '20px';
        e.style.background = 'red';
        e.style.color = 'white';
        e.style.font = 'bold 20px sans-serif';
        document.body.appendChild(e);
        return;
    }
    let e = [];
    let t = (t, r) => {
        e[t] = r;
    };
    let _null = null;
    let a = () => {
        if (!(null == _null || 0 === _null.byteLength)) {
            return false;
        }
        _null = new Uint8Array(exports.e.buffer);
        return _null;
    };
    let _null_1 = null;
    let o = () => {
        if (!(null == _null_1 || 0 === _null_1.byteLength)) {
            return false;
        }
        _null_1 = new Int32Array(exports.e.buffer);
        return _null_1;
    };
    let _null_2 = null;
    let i = () => {
        if (!(null == _null_2 || 0 === _null_2.byteLength)) {
            return false;
        }
        _null_2 = new Float64Array(exports.e.buffer);
        return _null_2;
    };
    let textEncoder = new TextEncoder('utf-8');
    let textDecoder = new TextDecoder('utf-8', { ignoreBOM: true });
    textDecoder.decode();
    let re_pattern = /^[\x00-\x7f]*$/;
    let u = (e, t) => {
        if (re_pattern.test(t)) {
            let r = exports.d(t.length, 1);
            let n = a();
            for (let e = 0; e < t.length; e++) {
                n[r + e] = t.charCodeAt(e);
            }
            o().set([
                r,
                t.length
            ], e >> 2);
        } else {
            y(e, textEncoder.encode(t));
        }
    };
    let p = (e, t) => {
        if (null != t) {
            u(e, t);
        }
    };
    let y = (e, array) => {
        let offset = exports.d(array.length, 1);
        a().set(array, offset);
        o().set([
            offset,
            array.length
        ], e >> 2);
    };
    let m = (e, array) => {
        let r = exports.d(array.length << 3, 8);
        i().set(array, r >> 3);
        o().set([
            r,
            array.length
        ], e >> 2);
    };
    let h = [[
            (t, r) => {
                t = e[t];
                r >>>= 0;
                t.strokeStyle = `rgb(${ r >> 16 },${ r >> 8 & 255 },${ 255 & r })`;
            },
            element => (element = e[element]).shift(),
            element => (element = e[element]).length,
            () => !!window.RTCDataChannel,
            (decode, t) => {
                decode = textDecoder.decode(a().subarray(decode, decode + t));
                location.hash = decode;
            },
            element => {
                element = e[element];
                window.removeEventListener('beforeunload', element);
            },
            (t, cap) => {
                t = e[t];
                cap >>>= 0;
                t.enable(cap);
            },
            element => {
                (element = e[element])[1] = true;
            },
            (t, r, a, n, o, s, i, l, maxLength, readOnly) => {
                t = e[t];
                i >>>= 0;
                readOnly = readOnly > 0;
                t.style.position = 'absolute';
                t.style.left = `${ r }px`;
                t.style.top = `${ a }px`;
                t.style.width = `${ n }px`;
                t.style.height = `${ o }px`;
                t.style.font = `bold ${ s }px/${ o }px Ubuntu`;
                t.style.border = 'none';
                t.style.outline = 'none';
                t.style.padding = '0';
                t.style.margin = '0';
                t.style.backgroundColor = 'transparent';
                t.style.setProperty('color', `rgba(${ i >> 16 },${ i >> 8 & 255 },${ 255 & i },${ l })`, 'important');
                t.maxLength = maxLength;
                t.readOnly = readOnly;
            },
            (t, sfactor, a) => {
                t = e[t];
                sfactor >>>= 0;
                a >>>= 0;
                t.blendFunc(sfactor, a);
            },
            element => {
                t(element, (e, t) => {
                    let createObjectURL = URL.createObjectURL(e);
                    let createElement = document.createElement('a');
                    createElement.style.display = 'none';
                    createElement.setAttribute('download', t);
                    createElement.setAttribute('href', createObjectURL);
                    document.body.appendChild(createElement);
                    createElement.click();
                    createElement.remove();
                    URL.revokeObjectURL(createObjectURL);
                });
            },
            (e, decode, n, decode_1, s) => {
                decode = textDecoder.decode(a().subarray(decode, decode + n));
                decode_1 = textDecoder.decode(a().subarray(decode_1, '() => {\n    if (!(null == n || 0 === n.byteLength)) {\n        return false;\n    }\n    n = new Int32Array(f.e.buffer);\n    return n;\n}null'));
                t(e, (() => {
                    let webSocket = new WebSocket(decode, decode_1.split('\n'));
                    webSocket.binaryType = 'arraybuffer';
                    return webSocket;
                })());
            },
            (t, r) => {
                r = e[r];
                u(t, (() => {
                    try {
                        return `${ r }`;
                    } catch (e) {
                        return '';
                    }
                })());
            },
            (t, r) => {
                u(t, (r = e[r]).shift());
            },
            element => if ((element = e[element]).videoRecorder || (element.videoRecorder = new MediaRecorder(element.captureStream(30), {
                    mimeType: MediaRecorder.isTypeSupported('video/webm;codecs=vp8') ? 'video/webm;codecs=vp8' : 'video/webm',
                    videoBitsPerSecond: 2097152,
                    audioBitsPerSecond: 0
                })), 'inactive' === element.videoRecorder.state) {
                element.videoRecorder.start();
                false;
            } else {
                element.videoRecorder.stop();
                true;
            },
            element => {
                t(element, (() => {
                    let e = [];
                    let t = () => {
                        if (!(null != document.activeElement)) {
                            return false;
                        }
                        if ('INPUT' === document.activeElement.tagName) {
                            return true;
                        }
                    };
                    window.addEventListener('keydown', element_1 => {
                        if (!element_1.isTrusted) {
                            return;
                        }
                        if (!(element_1.ctrlKey || element_1.altKey || element_1.metaKey || t() || /^F([56]|\d{2,})$/.test(element_1.key))) {
                            element_1.preventDefault();
                        }
                        let a = element_1.ctrlKey | element_1.altKey << 1 | element_1.shiftKey << 2 | element_1.metaKey << 3;
                        e.push(2 | element_1.repeat | a << 2, element_1.key, element_1.code);
                        g();
                    });
                    window.addEventListener('keyup', element_2 => {
                        if (!element_2.isTrusted) {
                            return;
                        }
                        if (!(element_2.ctrlKey || element_2.altKey || element_2.metaKey || t() || /^F([56]|\d{2,})$/.test(element_2.key))) {
                            element_2.preventDefault();
                        }
                        let a = element_2.ctrlKey | element_2.altKey << 1 | element_2.shiftKey << 2 | element_2.metaKey << 3;
                        e.push(1 | a << 2, element_2.key, element_2.code);
                        g();
                    });
                    return e;
                })());
            },
            (t, x_1, a, n, o, s) => {
                (t = e[t]).arc(x_1, a, n, o, s);
            },
            (t, texture) => {
                t = e[t];
                texture >>>= 0;
                t.activeTexture(texture);
            },
            (e, decode, r) => {
                decode = textDecoder.decode(a().subarray(decode, decode + r));
                u(e, (() => {
                    let e = '';
                    let createElement = document.createElement('span');
                    for (let a of (createElement.style.visibility = 'hidden', createElement.style.font = 'initial', createElement.style.fontSize = '1920px', document.body.appendChild(createElement), [
                            'initial',
                            'sans-serif',
                            'serif',
                            'monospace',
                            'cursive',
                            'fantasy'
                        ])) {
                        for (let n of (createElement.style.fontFamily = a, decode)) {
                            createElement.textContent = n;
                            e += `${ createElement.offsetWidth } ${ createElement.offsetHeight }
`;
                        }
                    }
                    createElement.remove();
                    return e.slice(0, -1);
                })());
            },
            (decode, t) => {
                open(decode = textDecoder.decode(a().subarray(decode, decode + t)), '_blank', 'noopener');
            },
            element => {
                t(element, (() => {
                    let e = [
                        false,
                        false
                    ];
                    let messageChannel = new MessageChannel();
                    messageChannel.port1.addEventListener('message', () => {
                        e[0] = true;
                        g();
                        if (!e[1]) {
                            if (document.hidden) {
                                requestAnimationFrame(() => messageChannel.port2.postMessage(null));
                            } else {
                                messageChannel.port2.postMessage(null);
                            };
                        }
                    });
                    messageChannel.port1.start();
                    messageChannel.port2.postMessage(null);
                    return e;
                })());
            },
            element => {
                (element = e[element]).id = 'canvas';
                document.body.appendChild(element);
            },
            element => 'string' == typeof (element = e[element]),
            element => {
                (element = e[element]).beginPath();
            },
            (t, func) => {
                t = e[t];
                func >>>= 0;
                t.depthFunc(func);
            },
            element => {
                (element = e[element]).restore();
            },
            (r, a, n) => {
                a = e[a];
                n >>>= 0;
                t(r, a.createShader(n));
            },
            (t, decode, n) => {
                t = e[t];
                decode = textDecoder.decode(a().subarray(decode, decode + n));
                t.value = decode;
            },
            element => 'number' == typeof (element = e[element]),
            (t, r, a, n, o, s) => {
                (t = e[t]).style.left = `${ r }px`;
                t.style.top = `${ a }px`;
                t.style.width = `${ n }px`;
                t.style.height = `${ o }px`;
                t.style.transform = `scale(${ s }, ${ s })`;
            },
            (t, globalAlpha) => {
                (t = e[t]).globalAlpha = globalAlpha;
            },
            () => null != document.fullscreenElement,
            (r, a, n, o) => {
                a = e[a];
                n = e[n];
                o >>>= 0;
                t(r, a.getProgramParameter(n, o));
            },
            element => {
                t(element, (() => {
                    let createElement = document.createElement('input');
                    createElement.spellcheck = false;
                    createElement.autocomplete = 'off';
                    createElement.tabIndex = -1;
                    createElement.lastValue = createElement.value;
                    document.body.appendChild(createElement);
                    return createElement;
                })());
            },
            (t, r) => {
                (t = e[t]).font = `${ r }px Ubuntu`;
            },
            (t, r) => {
                (t = e[t]).font = `bold ${ r }px Ubuntu`;
            },
            (t, image, dx, dy, o, s) => {
                t = e[t];
                image = e[image];
                t.drawImage(image, dx, dy, o, s);
            },
            (t, location, a, n) => {
                t = e[t];
                location = e[location];
                t.uniform2f(location, a, n);
            },
            () => Date.now(),
            (t, r, a) => {
                u(t, (r = e[r])[a].code);
            },
            element => {
                t(element, []);
            },
            (t, r) => {
                u(t, r = e[r]);
            },
            (t, r) => {
                (t = e[t]).font = `${ r }px Trebuchet MS`;
            },
            (t, program) => {
                t = e[t];
                program = e[program];
                t.useProgram(program);
            },
            (t, subarray, n, type, s, decode, l) => {
                t = e[t];
                subarray = a().subarray(subarray, subarray + n);
                type = textDecoder.decode(a().subarray(type, type + s));
                decode = textDecoder.decode(a().subarray(decode, '() => {\n    if (!(null == s || 0 === s.byteLength)) {\n        return false;\n    }\n    s = new Float64Array(f.e.buffer);\n    return s;\n}[object TextEncoder]'));
                t(new Blob([subarray], { type: type }), decode);
            },
            (decode, r, n) => {
                decode = textDecoder.decode(a().subarray(decode, decode + r));
                n = e[n];
                fetch(decode).then(element => element.json()).then(element => {
                    n.push(element);
                    g();
                });
            },
            () => {
                let e = window.ramp = window.ramp || {};
                e.que = e.que || [];
                e.passiveMode = true;
                window._pwGA4PageviewId = Date.now().toString();
                let t = window.dataLayer = window.dataLayer || [];
                let r = window.gtag = window.gtag || function () {
                    t.push(arguments);
                };
                r('js', new Date());
                r('config', 'UA-120544149-1');
                r('event', 'ramp_js', {
                    send_to: 'UA-120544149-1',
                    pageview_id: window._pwGA4PageviewId
                });
            },
            (r, decode, o, decode_2, i, l) => {
                decode = textDecoder.decode(a().subarray(decode, decode + o));
                decode_2 = textDecoder.decode(a().subarray(decode_2, 'null() => {\n    if (!(null == s || 0 === s.byteLength)) {\n        return false;\n    }\n    s = new Float64Array(f.e.buffer);\n    return s;\n}'));
                l = e[l];
                t(r, (() => {
                    try {
                        return [
                            false,
                            Function(decode, decode_2)(l)
                        ];
                    } catch (e) {
                        return [
                            true,
                            e
                        ];
                    }
                })());
            },
            () => navigator.hardwareConcurrency || -1,
            element => {
                t(element, (() => {
                    let e = [
                        false,
                        false
                    ];
                    let callback = () => {
                        e[0] = true;
                        g();
                        if (!e[1]) {
                            requestAnimationFrame(callback);
                        }
                    };
                    requestAnimationFrame(callback);
                    return e;
                })());
            },
            (t, x_2, a, n, o) => {
                (t = e[t]).fillRect(x_2, a, n, o);
            },
            (t, shader) => {
                t = e[t];
                shader = e[shader];
                t.compileShader(shader);
            },
            (t, shader, decode, o) => {
                t = e[t];
                shader = e[shader];
                decode = textDecoder.decode(a().subarray(decode, decode + o));
                t.shaderSource(shader, decode);
            },
            (t, r) => (t = e[t])[r].mspt,
            (subarray, t) => {
                subarray = a().subarray(subarray, subarray + t);
                try {
                    return new WebAssembly.Instance(new WebAssembly.Module(subarray)).exports.b(BigInt(0)) === BigInt(0);
                } catch (e) {
                }
                return false;
            },
            () => {
                let onerror = () => window.arrasAdDone = true;
                let createElement = document.createElement('script');
                createElement.async = true;
                createElement.src = 'https://cdn.intergient.com/1024850/73985/ramp.js';
                createElement.onload = () => {
                    ramp.que.push(onerror);
                    setTimeout(onerror, 3000);
                };
                createElement.onerror = onerror;
                setTimeout(onerror, 30000);
                document.body.appendChild(createElement);
            },
            element => {
                u(element, (() => {
                    let context = document.createElement('canvas').getContext('webgl');
                    if (!context) {
                        return '';
                    }
                    let t = [
                        context.RENDERER,
                        context.VENDOR
                    ];
                    let extension = context.getExtension('WEBGL_debug_renderer_info');
                    if (null != extension) {
                        t.push(extension.UNMASKED_RENDERER_WEBGL, extension.UNMASKED_VENDOR_WEBGL);
                    }
                    return t.map(element_3 => context.getParameter(element_3)).join('\n');
                })());
            },
            element => element = e[element],
            (t, x_3, a, n, o) => {
                (t = e[t]).rect(x_3, a, n, o);
            },
            element => {
                t(element, (() => {
                    let e = [];
                    fetch('/CHANGELOG.md').then(element_4 => element_4.text()).catch(() => '').then(element_5 => e.push(element_5));
                    return e;
                })());
            },
            (t, mode, a, n, o) => {
                t = e[t];
                mode >>>= 0;
                n >>>= 0;
                t.drawElements(mode, a, n, o);
            },
            (t, image, sx, sy, o, s, i, l, d, c) => {
                t = e[t];
                image = e[image];
                t.drawImage(image, sx, sy, o, s, i, l, d, c);
            },
            (t, subarray, n, decode, s) => {
                (t = e[t])(new Blob([subarray = a().subarray(subarray, subarray + n)], { type: decode = textDecoder.decode(a().subarray(decode, '() => {\n    if (!(null == n || 0 === n.byteLength)) {\n        return false;\n    }\n    n = new Int32Array(f.e.buffer);\n    return n;\n}null')) }));
            },
            (t, r, decode, o) => (t = e[t], r = e[r], decode = textDecoder.decode(a().subarray(decode, decode + o)), t.getAttribLocation(r, decode)),
            element => (element = e[element]).shift().clients,
            (t, mode, a, n) => {
                t = e[t];
                mode >>>= 0;
                t.drawArrays(mode, a, n);
            },
            () => 'boolean' == typeof window.crossOriginIsolated,
            (r, a, n) => {
                a = e[a];
                n >>>= 0;
                t(r, a.getParameter(n));
            },
            (r, a) => {
                a = e[a];
                t(r, (() => {
                    let atob = atob(a.toDataURL().split(',')[1]);
                    let uint8Array = new Uint8Array(atob.length);
                    for (let r = 0; r < atob.length; r++) {
                        uint8Array[r] = atob.charCodeAt(r);
                    }
                    return uint8Array;
                })());
            },
            (t, srcRGB, a, n, o) => {
                t = e[t];
                srcRGB >>>= 0;
                a >>>= 0;
                n >>>= 0;
                o >>>= 0;
                t.blendFuncSeparate(srcRGB, a, n, o);
            },
            (t, red, a, n, o) => {
                (t = e[t]).blendColor(red, a, n, o);
            },
            (t, decode, n) => (t = e[t], decode = textDecoder.decode(a().subarray(decode, decode + n)), t.measureText(decode).width),
            element => (element = e[element]).complete,
            (t, r) => (t = e[t])[r].hidden,
            element => {
                t(element, (() => {
                    let e = [];
                    try {
                        navigator.keyboard.getLayoutMap().then(element_6 => {
                            e.push(Array.from(element_6).join('\n'));
                        }).catch(element_7 => {
                            e.push('');
                        });
                    } catch (t) {
                        e.push('');
                    }
                    return e;
                })());
            },
            (t, r, a) => {
                t = e[t];
                r >>>= 0;
                t.strokeStyle = `rgba(${ r >> 16 },${ r >> 8 & 255 },${ 255 & r },${ a })`;
            },
            (t, image, dx, dy) => {
                t = e[t];
                image = e[image];
                t.drawImage(image, dx, dy);
            },
            (subarray, t) => (subarray = a().subarray(subarray, subarray + t), WebAssembly.validate(subarray)),
            (t, r) => {
                y(t, r = e[r]);
            },
            element => {
                t(element, window);
            },
            (t, decode, n) => {
                t = e[t];
                decode = textDecoder.decode(a().subarray(decode, decode + n));
                t.lastValue = decode;
            },
            () => {
                let activeElement = document.activeElement;
                if (null != activeElement) {
                    activeElement.blur();
                }
            },
            element => {
                (element = e[element]).close();
            },
            () => {
                try {
                    location.reload();
                } catch (e) {
                }
            },
            () => parent !== top,
            (r, a) => {
                t(r, (a = e[a])[1]);
            },
            () => !document.createElement('canvas').getContext('webgl', { failIfMajorPerformanceCaveat: true }),
            () => window.arrasAdDone,
            (t, target, level, internalformat, format, type, i) => {
                t = e[t];
                target >>>= 0;
                internalformat >>>= 0;
                format >>>= 0;
                type >>>= 0;
                i = e[i];
                t.texImage2D(target, level, internalformat, format, type, i);
            },
            (t, decode, n, o, s) => {
                t = e[t];
                decode = textDecoder.decode(a().subarray(decode, decode + n));
                t.strokeText(decode, o, s);
            },
            element => {
                t(element, document.createElement('canvas'));
            },
            (e, decode, n) => {
                decode = textDecoder.decode(a().subarray(decode, decode + n));
                t(e, (() => {
                    let _image = new Image();
                    _image.src = decode;
                    return _image;
                })());
            },
            (r, n, o, decode, i) => {
                n = e[n];
                o = e[o];
                decode = textDecoder.decode(a().subarray(decode, 'null() => {\n    if (!(null == s || 0 === s.byteLength)) {\n        return false;\n    }\n    s = new Float64Array(f.e.buffer);\n    return s;\n}'));
                t(r, n.getUniformLocation(o, decode));
            },
            element => {
                u(element, (() => {
                    let item;
                    try {
                        item = localStorage.getItem('arras.io');
                    } catch (e) {
                    }
                    if (item) {
                        return true;
                    }
                    if ('') {
                        return true;
                    }
                })());
            },
            () => !!navigator.gpu,
            element => !(element = e[element]),
            (t, index, a, n, o, s, i) => {
                t = e[t];
                index >>>= 0;
                n >>>= 0;
                o = o > 0;
                t.vertexAttribPointer(index, a, n, o, s, i);
            },
            () => !!WebAssembly.instantiateStreaming,
            (r, a) => {
                a = e[a];
                t(r, new Promise(element => {
                    let callback = element_8 => {
                        element(element_8.data);
                        a.videoRecorder.removeEventListener('dataavailable', callback);
                    };
                    a.videoRecorder.addEventListener('dataavailable', callback);
                }));
            },
            () => window.devicePixelRatio,
            (t, r, a) => {
                t = e[t];
                r >>>= 0;
                t.fillStyle = `rgba(${ r >> 16 },${ r >> 8 & 255 },${ 255 & r },${ a })`;
            },
            element => {
                (element = e[element]).remove();
            },
            (e, decode, n) => {
                decode = textDecoder.decode(a().subarray(decode, decode + n));
                t(e, (() => {
                    let createElement = document.createElement('div');
                    createElement.id = decode;
                    document.body.appendChild(createElement);
                    return createElement;
                })());
            },
            () => window.innerHeight,
            element => {
                u(element, navigator.userAgent || '');
            },
            element => {
                (element = e[element]).focus();
            },
            element => (element = e[element]).shift() || 0,
            (t, r) => {
                u(t, (r = e[r]).lastValue);
            },
            (t, target, a) => {
                t = e[t];
                target >>>= 0;
                a = e[a];
                t.bindBuffer(target, a);
            },
            element => 'boolean' == typeof (element = e[element]),
            element => {
                (element = e[element]).save();
            },
            element => (element = e[element]).readyState,
            (t, r) => {
                r = e[r];
                m(t, (() => {
                    let int32Array = new Int32Array(r);
                    r.length = 0;
                    return int32Array;
                })());
            },
            (t, r, a) => {
                u(t, (r = e[r])[a].host);
            },
            (t, pname, a) => {
                t = e[t];
                pname >>>= 0;
                t.pixelStorei(pname, a);
            },
            (t, lineWidth) => {
                (t = e[t]).lineWidth = lineWidth;
            },
            element => {
                let _num = (element = e[element])[0];
                element[0] = false;
                return _num;
            },
            (t, x_4, a, n, o) => {
                (t = e[t]).viewport(x_4, a, n, o);
            },
            element => {
                element = e[element];
                window.addEventListener('beforeunload', element);
            },
            element => {
                u(element, document.referrer);
            },
            element => (element = e[element]).isContextLost(),
            (t, location, a) => {
                t = e[t];
                location = e[location];
                t.uniform1i(location, a);
            },
            (t, r, decode, o) => {
                t = e[t];
                r = e[r];
                decode = textDecoder.decode(a().subarray(decode, decode + o));
                t.then(element => r(element, decode));
            },
            element => {
                e[element >>>= 0] = null;
            },
            (t, r) => {
                r = e[r];
                m(t, (() => {
                    r.style.position = 'absolute';
                    r.style.display = 'inline-block';
                    r.style.width = 'auto';
                    r.style.height = 'auto';
                    r.style.overflow = 'hidden';
                    r.style.transformOrigin = 'top left';
                    r.style.transform = '';
                    let boundingClientRect = r.getBoundingClientRect();
                    return [
                        boundingClientRect.width,
                        boundingClientRect.height
                    ];
                })());
            },
            (t, r) => (t = e[t])[r].featured,
            element => {
                u(element, location.hash);
            },
            (decode, t) => {
                decode = textDecoder.decode(a().subarray(decode, decode + t));
                try {
                    localStorage.setItem('arras.io', decode);
                } catch (e) {
                }
            },
            (t, newChild) => {
                t = e[t];
                newChild = e[newChild];
                t.appendChild(newChild);
            },
            (t, r) => {
                y(t, (r = e[r]).shift());
            },
            (t, r) => {
                t = e[t];
                r >>>= 0;
                t.fillStyle = `rgb(${ r >> 16 },${ r >> 8 & 255 },${ 255 & r })`;
            },
            (decode, t) => {
                decode = textDecoder.decode(a().subarray(decode, decode + t));
                location.hash = `#${ decode }`;
            },
            element => {
                (element = e[element]).fill();
            },
            (t, index) => {
                t = e[t];
                index >>>= 0;
                t.enableVertexAttribArray(index);
            },
            (t, target, subarray, o, usage) => {
                t = e[t];
                target >>>= 0;
                subarray = a().subarray(subarray, subarray + o);
                usage >>>= 0;
                t.bufferData(target, subarray, usage);
            },
            (decode, t) => {
                fetch('https://analytics-server.arras.cx:2002/data', {
                    method: 'POST',
                    mode: 'cors',
                    cache: 'no-cache',
                    headers: { 'Content-Type': 'application/json' },
                    body: decode = textDecoder.decode(a().subarray(decode, decode + t))
                }).then(element => element.json()).catch(() => {
                });
            },
            (t, r, decode, o) => {
                (t = e[t])(new Blob([r = e[r]], { type: decode = textDecoder.decode(a().subarray(decode, decode + o)) }));
            },
            () => new Date(new Date().getFullYear(), 0, 1).getTimezoneOffset(),
            (t, r, a, n, o, s, i, l, d) => {
                r >>>= 0;
                a = e[a];
                l >>>= 0;
                d >>>= 0;
                y(t, (() => {
                    let uint8Array = new Uint8Array(r);
                    a.readPixels(n, o, s, i, l, d, uint8Array);
                    return uint8Array;
                })());
            },
            element => {
                (element = e[element]).clip();
            },
            (t, x_5, a, n, o) => {
                (t = e[t]).scissor(x_5, a, n, o);
            },
            element => {
                (element = e[element]).lineJoin = 'round';
            },
            (r, a, antialias) => {
                a = e[a];
                antialias = antialias > 0;
                t(r, a.getContext('webgl', {
                    antialias: antialias,
                    premultipliedAlpha: true,
                    failIfMajorPerformanceCaveat: true
                }));
            },
            element => {
                t(element, null);
            },
            (t, r) => {
                u(t, (r = e[r]).protocol);
            },
            element => {
                t(element, element_9 => (element_9.preventDefault(), element_9.returnValue = '', ''));
            },
            element => element = e[element],
            (t, r) => {
                u(t, (r = e[r]).value);
            },
            (r, a) => {
                a = e[a];
                t(r, (() => {
                    let e = [];
                    a.addEventListener('open', () => {
                        e.push(1);
                        g();
                    });
                    a.addEventListener('message', t => {
                        e.push(2, new Uint8Array(t.data));
                        g();
                    });
                    a.addEventListener('close', t => {
                        e.push(3, t.wasClean, t.code, t.reason);
                        g();
                    });
                    a.addEventListener('error', () => {
                        e.push(4);
                        g();
                    });
                    return e;
                })());
            },
            element => {
                (element = e[element]).style.clipPath = 'none';
            },
            (t, location, a, n, o) => {
                t = e[t];
                location = e[location];
                t.uniform3f(location, a, n, o);
            },
            () => {
                try {
                    document.body.requestFullscreen();
                } catch (e) {
                }
            },
            (t, r, a, n, o) => {
                (t = e[t]).style.clipPath = `xywh(${ r }px ${ a }px ${ n }px ${ o }px)`;
            },
            (r, n, decode, s) => {
                n = e[n];
                decode = textDecoder.decode(a().subarray(decode, '() => {\n    if (!(null == n || 0 === n.byteLength)) {\n        return false;\n    }\n    n = new Int32Array(f.e.buffer);\n    return n;\n}null'));
                t(r, (() => {
                    try {
                        return n[decode];
                    } catch (e) {
                        return n;
                    }
                })());
            },
            (t, mask) => {
                t = e[t];
                mask >>>= 0;
                t.clear(mask);
            },
            (r, a) => {
                t(r, Object.values((a = e[a]).shift().status));
            },
            () => {
                document.addEventListener('contextmenu', element => {
                    if ('A' !== element.target.tagName && 'INPUT' !== element.target.tagName) {
                        element.preventDefault();
                    }
                });
            },
            (t, r) => {
                r = e[r];
                m(t, (() => {
                    let boundingClientRect = r.getBoundingClientRect();
                    return [
                        boundingClientRect.top,
                        boundingClientRect.right,
                        boundingClientRect.bottom,
                        boundingClientRect.left
                    ];
                })());
            },
            (t, nodes) => {
                t = e[t];
                nodes = e[nodes];
                t.replaceWith(nodes);
            },
            (t, x_6, a, n, o) => {
                (t = e[t]).strokeRect(x_6, a, n, o);
            },
            element => {
                u(element, (() => {
                    let stackTraceLimit = Error.stackTraceLimit;
                    if ('number' == typeof stackTraceLimit) {
                        Error.stackTraceLimit = 1000;
                    }
                    let stack = Error().stack;
                    if ('number' == typeof stackTraceLimit) {
                        Error.stackTraceLimit = stackTraceLimit;
                    }
                    return;
                })());
            },
            (decode, t, decode_3, n) => {
                console.log(decode = textDecoder.decode(a().subarray(decode, decode + t)), decode_3 = textDecoder.decode(a().subarray(decode_3, decode_3 + n)));
            },
            (t, r) => {
                p(t, (r = e[r]).pop());
            },
            (r, a) => {
                a = e[a];
                t(r, new Promise(element => a.toBlob(element)));
            },
            (t, r) => (t = e[t])[r].online,
            element => {
                (element = e[element]).style.textAlign = 'center';
            },
            element => {
                (element = e[element]).closePath();
            },
            (t, program) => {
                t = e[t];
                program = e[program];
                t.linkProgram(program);
            },
            (r, a, alpha) => {
                a = e[a];
                alpha = alpha > 0;
                t(r, a.getContext('2d', { alpha: alpha }));
            },
            element => (element = e[element]).shift() || 0,
            element => {
                u(element, location.hostname);
            },
            (t, program, a) => {
                t = e[t];
                program = e[program];
                a = e[a];
                t.attachShader(program, a);
            },
            (t, subarray, n) => {
                t = e[t];
                subarray = a().subarray(subarray, subarray + n);
                if (1 === t.readyState) {
                    t.send(subarray);
                }
            },
            element => !!((element = e[element]).captureStream && window.MediaRecorder && MediaRecorder.isTypeSupported('video/webm')),
            (t, width, height) => {
                (t = e[t]).width = width;
                t.height = height;
            },
            () => crypto.getRandomValues(new Uint32Array(1))[0],
            element => {
                t(element, document.createElement('div'));
            },
            (t, x_7, a) => {
                (t = e[t]).moveTo(x_7, a);
            },
            (t, r) => {
                t = e[t];
                r = e[r];
                t.then(element => r(element));
            },
            (t, r, a) => {
                u(t, (r = e[r])[a].name);
            },
            () => performance.now(),
            () => {
                let _bool = false;
                window.addEventListener('error', element => {
                    if (_bool) {
                        return;
                    }
                    _bool = true;
                    let {
                        message: message,
                        filename: filename,
                        lineno: lineno,
                        colno: colno,
                        error: error
                    } = element;
                    if (error) {
                        error = error.toString();
                    }
                    if (null != error || 0 != lineno || 0 != colno) {
                        prompt('The game may have crashed, refresh the page to recover from error.\n\nError information:', JSON.stringify({
                            message: message,
                            filename: filename,
                            lineno: lineno,
                            colno: colno,
                            error: error
                        }));
                    }
                });
            },
            element => {
                (element = e[element]).addEventListener('focus', () => element.select());
            },
            () => {
                let createElement = document.createElement('script');
                createElement.defer = true;
                createElement.src = 'https://static.cloudflareinsights.com/beacon.min.js';
                createElement.setAttribute('data-cf-beacon', JSON.stringify({ token: 'arras.io' === location.hostname.slice(-8) ? 'ff5561cea47c47eaafe62003a2bb80fe' : 'arrax.io' === location.hostname.slice(-8) ? '7ce137179299421288a5a93c26f71e2c' : 'arras.netlify.app' === location.hostname.slice(-17) ? '73db2851ba12432c968cae9c6b385f3a' : 'arras.cx' === location.hostname.slice(-8) ? 'a5ebfa0ea9364b2ca5cddf829c28095e' : '1a3464390f784a2a800f401f1bfa6a30' }));
                document.body.appendChild(createElement);
            },
            (r, a) => {
                a = e[a];
                t(r, (() => {
                    let e = [];
                    a.addEventListener('mousedown', t => {
                        t.isTrusted && (e.push(1, t.clientX, t.clientY, t.button), g());
                    });
                    a.addEventListener('mousemove', t => {
                        t.isTrusted && (e.push(2, t.clientX, t.clientY), g());
                    });
                    a.addEventListener('mouseup', t => {
                        t.isTrusted && (e.push(3, t.clientX, t.clientY, t.button), g());
                    });
                    a.addEventListener('wheel', t => {
                        t.isTrusted && (t.preventDefault(), e.push(4, t.clientX, t.clientY, t.deltaY * (1 === t.deltaMode ? 40 : 2 === t.deltaMode ? 320 : 1)), g());
                    });
                    a.addEventListener('touchstart', t => {
                        if (t.isTrusted) {
                            for (let r of (t.preventDefault(), t.changedTouches)) {
                                e.push(5, r.clientX, r.clientY, r.identifier);
                                g();
                            }
                        }
                    }, { passive: false });
                    a.addEventListener('touchmove', t => {
                        if (t.isTrusted) {
                            for (let r of (t.preventDefault(), t.changedTouches)) {
                                e.push(6, r.clientX, r.clientY, r.identifier);
                                g();
                            }
                        }
                    }, { passive: false });
                    a.addEventListener('touchend', t => {
                        if (t.isTrusted) {
                            for (let r of (t.preventDefault(), t.changedTouches)) {
                                e.push(7, r.clientX, r.clientY, r.identifier);
                                g();
                            }
                        }
                    });
                    a.addEventListener('touchcancel', t => {
                        if (t.isTrusted) {
                            for (let r of t.changedTouches) {
                                e.push(8, r.clientX, r.clientY, r.identifier);
                                g();
                            }
                        }
                    });
                    return e;
                })());
            },
            element => (element = e[element]).shift(),
            (r, a) => {
                t(r, (a = e[a]).createProgram());
            },
            element => {
                (element = e[element]).lineJoin = 'miter';
            },
            () => !!navigator.serviceWorker,
            (t, r, type, o, decode, i) => {
                t = e[t];
                r = e[r];
                type = textDecoder.decode(a().subarray(type, type + o));
                decode = textDecoder.decode(a().subarray(decode, 'null() => {\n    if (!(null == s || 0 === s.byteLength)) {\n        return false;\n    }\n    s = new Float64Array(f.e.buffer);\n    return s;\n}'));
                t(new Blob([r], { type: type }), decode);
            },
            (decode, t) => {
                console.log(decode = textDecoder.decode(a().subarray(decode, decode + t)));
            },
            (t, target, a, n) => {
                t = e[t];
                target >>>= 0;
                a >>>= 0;
                t.texParameteri(target, a, n);
            },
            (t, target, a) => {
                t = e[t];
                target >>>= 0;
                a = e[a];
                t.bindTexture(target, a);
            },
            () => window.innerWidth,
            (t, r) => (t = e[t])[r].clients,
            element => (element = e[element])[0],
            element => {
                (element = e[element]).lineCap = 'round';
            },
            element => {
                t(element, (() => {
                    let e = [];
                    Promise.all([
                        document.fonts.load('bold 16px Ubuntu'),
                        document.fonts.load('16px Ubuntu')
                    ]).then(() => e.push(true));
                    return e;
                })());
            },
            element => if (0 === (element = e[element]).length) {
                0;
            } else {
                if (element[0].status) {
                    1;
                } else {
                    2;
                }
            },
            element => {
                (element = e[element]).lineJoin = 'round';
                element.lineCap = 'round';
                element.textAlign = 'left';
                element.textBaseline = 'middle';
            },
            (t, x_8, a) => {
                (t = e[t]).lineTo(x_8, a);
            },
            element => {
                (element = e[element]).stroke();
            },
            (t, r) => (t = e[t])[r].uptime,
            (r, a) => {
                t(r, (a = e[a]).createTexture());
            },
            (t, x_9, a, n, o) => {
                (t = e[t]).clearRect(x_9, a, n, o);
            },
            (decode, t) => {
                decode = textDecoder.decode(a().subarray(decode, decode + t));
                (async () => navigator.clipboard.writeText(decode))().catch(() => prompt('Copy:', decode));
            },
            (t, decode, n, o, s) => {
                t = e[t];
                decode = textDecoder.decode(a().subarray(decode, decode + n));
                t.fillText(decode, o, s);
            },
            (t, x_10, y_1) => {
                (t = e[t]).translate(x_10, y_1);
            },
            () => 'ontouchstart' in document.body && /android|mobi/i.test(navigator.userAgent),
            element => (element = e[element], document.activeElement === element),
            (t, cap) => {
                t = e[t];
                cap >>>= 0;
                t.disable(cap);
            },
            element => (element = e[element]).pop(),
            (decode, t) => {
                decode = textDecoder.decode(a().subarray(decode, decode + t));
                let createElement = document.createElement('canvas');
                try {
                    if (createElement.getContext(decode, { failIfMajorPerformanceCaveat: true })) {
                        return 3;
                    } else {
                        if (createElement.getContext(decode)) {
                            return 2;
                        } else {
                            return 1;
                        }
                    }
                } catch (e) {
                }
                return 0;
            },
            element => {
                (element = e[element]).lineCap = 'butt';
            },
            element => {
                t(element, element_10 => {
                    (async () => navigator.clipboard.write([new ClipboardItem({ [element_10.type]: element_10 })]))().catch(element_11 => alert('Failed to copy!'));
                });
            },
            (t, decode, n) => {
                t = e[t];
                decode = textDecoder.decode(a().subarray(decode, decode + n));
                t.style.cursor = decode;
            },
            (r, a) => {
                t(r, (a = e[a]).createBuffer());
            }
        ]];
    let fetch = fetch('./app.wasm');
    let exports = (await (WebAssembly.instantiateStreaming ? WebAssembly.instantiateStreaming(fetch, h) : WebAssembly.instantiate(await fetch.arrayBuffer(), h))).instance.exports;
    let g = exports.c;
    exports.b();
})();