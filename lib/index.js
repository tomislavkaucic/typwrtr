"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Typwrtr = function () {
    function Typwrtr(id) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Typwrtr);

        var defaults = {
            text: ["It was a bright cold day in April, and the clocks were striking thirteen.", "It was a pleasure to burn."],
            speed: 50,
            pauseTime: 2500,
            infinite: true,
            textCursor: true,
            backspace: true,
            width: 0
        };
        var setup = Object.assign({}, defaults, options);
        this.id = id;
        this.element = document.getElementById(id);
        this.text = setup.text;
        this.speed = setup.speed;
        this.pauseTime = setup.pauseTime;
        this.infinite = setup.infinite;
        this.textCursor = setup.textCursor;
        this.backspace = setup.backspace;
        this.width = setup.width;

        if (this.width > 0) {
            this.element.style.display = 'inline-block';
            this.element.style.width = this.width + 'px';
        }
        this.type();
    }

    _createClass(Typwrtr, [{
        key: "type",
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var i, j, k;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                i = 0;

                                if (this.textCursor == true) {
                                    this.element.classList.add('tw-text-cursor');
                                }
                                i = 0;

                            case 3:
                                if (!(i < this.text.length)) {
                                    _context.next = 28;
                                    break;
                                }

                                j = 0;

                                this.element.innerHTML = "";

                            case 6:
                                if (!(j < this.text[i].length)) {
                                    _context.next = 13;
                                    break;
                                }

                                this.element.innerHTML += this.text[i].charAt(j);
                                j++;
                                _context.next = 11;
                                return this.sleep(this.speed);

                            case 11:
                                _context.next = 6;
                                break;

                            case 13:
                                _context.next = 15;
                                return this.sleep(this.pauseTime);

                            case 15:
                                if (!(this.backspace == true && i != this.text.length - 1)) {
                                    _context.next = 25;
                                    break;
                                }

                                k = this.element.innerHTML.length;
                                k;

                            case 18:
                                if (!(k >= 0)) {
                                    _context.next = 25;
                                    break;
                                }

                                this.element.innerHTML = this.element.innerHTML.slice(0, -1);
                                _context.next = 22;
                                return this.sleep(this.speed);

                            case 22:
                                k--;
                                _context.next = 18;
                                break;

                            case 25:
                                i++;
                                _context.next = 3;
                                break;

                            case 28:

                                if (this.infinite == true) {
                                    this.type();
                                }

                            case 29:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function type() {
                return _ref.apply(this, arguments);
            }

            return type;
        }()
    }, {
        key: "sleep",
        value: function sleep(ms) {
            return new Promise(function (resolve) {
                return setTimeout(resolve, ms);
            });
        }
    }]);

    return Typwrtr;
}();

exports.default = Typwrtr;