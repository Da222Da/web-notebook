import {
  require_jsmind
} from "./chunk-4KODZ5DT.js";
import {
  __commonJS
} from "./chunk-TCQZMY3T.js";

// node_modules/jsmind/es6/jsmind.draggable-node.js
var require_jsmind_draggable_node = __commonJS({
  "node_modules/jsmind/es6/jsmind.draggable-node.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "undefined" != typeof module ? e(require_jsmind()) : "function" == typeof define && define.amd ? define(["jsmind"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).jsMind);
    }(exports, function(t) {
      "use strict";
      function e(t2) {
        return t2 && "object" == typeof t2 && "default" in t2 ? t2 : { default: t2 };
      }
      var i = e(t);
      if (!i.default)
        throw new Error("jsMind is not defined");
      const s = i.default.$, o = "getSelection" in s.w ? function() {
        s.w.getSelection().removeAllRanges();
      } : function() {
        s.d.selection.empty();
      }, n = { line_width: 5, line_color: "rgba(0,0,0,0.3)", line_color_invalid: "rgba(255,51,51,0.6)", lookup_delay: 200, lookup_interval: 100, scrolling_trigger_width: 20, scrolling_step_length: 10, shadow_node_class_name: "jsmind-draggable-shadow-node" };
      class h {
        constructor(t2, e2) {
          var s2 = {};
          i.default.util.json.merge(s2, n), i.default.util.json.merge(s2, e2), this.version = "0.4.0", this.jm = t2, this.options = s2, this.e_canvas = null, this.canvas_ctx = null, this.shadow = null, this.shadow_p_x = 0, this.shadow_p_y = 0, this.shadow_w = 0, this.shadow_h = 0, this.active_node = null, this.target_node = null, this.target_direct = null, this.client_w = 0, this.client_h = 0, this.offset_x = 0, this.offset_y = 0, this.hlookup_delay = 0, this.hlookup_timer = 0, this.capture = false, this.moved = false, this.canvas_draggable = t2.get_view_draggable(), this.view_panel = t2.view.e_panel, this.view_panel_rect = null;
        }
        init() {
          this.create_canvas(), this.create_shadow(), this.event_bind();
        }
        resize() {
          this.jm.view.e_nodes.appendChild(this.shadow), this.e_canvas.width = this.jm.view.size.w, this.e_canvas.height = this.jm.view.size.h;
        }
        create_canvas() {
          var t2 = s.c("canvas");
          this.jm.view.e_panel.appendChild(t2);
          var e2 = t2.getContext("2d");
          this.e_canvas = t2, this.canvas_ctx = e2;
        }
        create_shadow() {
          var t2 = s.c("jmnode");
          t2.style.visibility = "hidden", t2.style.zIndex = "3", t2.style.cursor = "move", t2.style.opacity = "0.7", t2.className = this.options.shadow_node_class_name, this.shadow = t2;
        }
        reset_shadow(t2) {
          var e2 = this.shadow.style;
          this.shadow.innerHTML = t2.innerHTML, e2.left = t2.style.left, e2.top = t2.style.top, e2.width = t2.style.width, e2.height = t2.style.height, e2.backgroundImage = t2.style.backgroundImage, e2.backgroundSize = t2.style.backgroundSize, e2.transform = t2.style.transform, this.shadow_w = this.shadow.clientWidth, this.shadow_h = this.shadow.clientHeight;
        }
        show_shadow() {
          this.moved || (this.shadow.style.visibility = "visible");
        }
        hide_shadow() {
          this.shadow.style.visibility = "hidden";
        }
        magnet_shadow(t2, e2, i2) {
          this.canvas_ctx.lineWidth = this.options.line_width, this.canvas_ctx.strokeStyle = i2 ? this.options.line_color_invalid : this.options.line_color, this.canvas_ctx.lineCap = "round", this.clear_lines(), this.canvas_lineto(t2.x, t2.y, e2.x, e2.y);
        }
        clear_lines() {
          this.canvas_ctx.clearRect(0, 0, this.jm.view.size.w, this.jm.view.size.h);
        }
        canvas_lineto(t2, e2, i2, s2) {
          this.canvas_ctx.beginPath(), this.canvas_ctx.moveTo(t2, e2), this.canvas_ctx.lineTo(i2, s2), this.canvas_ctx.stroke();
        }
        event_bind() {
          var t2 = this, e2 = this.jm.view.container;
          s.on(e2, "mousedown", function(e3) {
            0 === e3.button && t2.dragstart.call(t2, e3);
          }), s.on(e2, "mousemove", function(e3) {
            0 === e3.movementX && 0 === e3.movementY || t2.drag.call(t2, e3);
          }), s.on(e2, "mouseup", function(e3) {
            t2.dragend.call(t2, e3);
          }), s.on(e2, "touchstart", function(e3) {
            t2.dragstart.call(t2, e3);
          }), s.on(e2, "touchmove", function(e3) {
            t2.drag.call(t2, e3);
          }), s.on(e2, "touchend", function(e3) {
            t2.dragend.call(t2, e3);
          });
        }
        dragstart(t2) {
          if (this.jm.get_editable() && !this.capture) {
            var e2 = this.jm.view;
            if (!e2.is_editing()) {
              this.active_node = null, this.view_draggable = this.jm.get_view_draggable();
              var i2 = this.find_node_element(t2.target);
              if (i2) {
                this.view_draggable && this.jm.disable_view_draggable();
                var o2 = e2.get_binded_nodeid(i2);
                if (o2) {
                  var n2 = this.jm.get_node(o2);
                  if (!n2.isroot) {
                    this.reset_shadow(i2), this.view_panel_rect = this.view_panel.getBoundingClientRect(), this.active_node = n2, this.offset_x = (t2.clientX || t2.touches[0].clientX) / e2.zoom_current - i2.offsetLeft, this.offset_y = (t2.clientY || t2.touches[0].clientY) / e2.zoom_current - i2.offsetTop, this.client_hw = Math.floor(i2.clientWidth / 2), this.client_hh = Math.floor(i2.clientHeight / 2), 0 != this.hlookup_delay && s.w.clearTimeout(this.hlookup_delay), 0 != this.hlookup_timer && s.w.clearInterval(this.hlookup_timer);
                    var h2 = this;
                    this.hlookup_delay = s.w.setTimeout(function() {
                      h2.hlookup_delay = 0, h2.hlookup_timer = s.w.setInterval(function() {
                        h2.lookup_target_node.call(h2);
                      }, h2.options.lookup_interval);
                    }, this.options.lookup_delay), h2.capture = true;
                  }
                }
              }
            }
          }
        }
        drag(t2) {
          if (this.jm.get_editable() && this.capture) {
            t2.preventDefault(), this.show_shadow(), this.moved = true, o();
            var e2 = this.jm.view, i2 = (t2.clientX || t2.touches[0].clientX) / e2.zoom_current - this.offset_x, s2 = (t2.clientY || t2.touches[0].clientY) / e2.zoom_current - this.offset_y;
            t2.clientY - this.view_panel_rect.top < this.options.scrolling_trigger_width && this.view_panel.scrollTop > this.options.scrolling_step_length ? (this.view_panel.scrollBy(0, -this.options.scrolling_step_length), this.offset_y += this.options.scrolling_step_length / e2.zoom_current) : this.view_panel_rect.bottom - t2.clientY < this.options.scrolling_trigger_width && this.view_panel.scrollTop < this.view_panel.scrollHeight - this.view_panel_rect.height - this.options.scrolling_step_length && (this.view_panel.scrollBy(0, this.options.scrolling_step_length), this.offset_y -= this.options.scrolling_step_length / e2.zoom_current), t2.clientX - this.view_panel_rect.left < this.options.scrolling_trigger_width && this.view_panel.scrollLeft > this.options.scrolling_step_length ? (this.view_panel.scrollBy(-this.options.scrolling_step_length, 0), this.offset_x += this.options.scrolling_step_length / e2.zoom_current) : this.view_panel_rect.right - t2.clientX < this.options.scrolling_trigger_width && this.view_panel.scrollLeft < this.view_panel.scrollWidth - this.view_panel_rect.width - this.options.scrolling_step_length && (this.view_panel.scrollBy(this.options.scrolling_step_length, 0), this.offset_x -= this.options.scrolling_step_length / e2.zoom_current), this.shadow.style.left = i2 + "px", this.shadow.style.top = s2 + "px", o();
          }
        }
        dragend(t2) {
          if (this.jm.get_editable()) {
            if (this.view_draggable && this.jm.enable_view_draggable(), this.capture) {
              if (0 != this.hlookup_delay && (s.w.clearTimeout(this.hlookup_delay), this.hlookup_delay = 0, this.clear_lines()), 0 != this.hlookup_timer && (s.w.clearInterval(this.hlookup_timer), this.hlookup_timer = 0, this.clear_lines()), this.moved) {
                var e2 = this.active_node, i2 = this.target_node, o2 = this.target_direct;
                this.move_node(e2, i2, o2);
              }
              this.hide_shadow();
            }
            this.view_panel_rect = null, this.moved = false, this.capture = false;
          }
        }
        find_node_element(t2) {
          return t2 === this.jm.view.e_nodes || t2 === this.jm.view.e_panel || t2 === this.jm.view.container ? null : "jmnode" === t2.tagName.toLowerCase() ? t2 : this.find_node_element(t2.parentNode);
        }
        lookup_target_node() {
          let t2 = this.shadow.offsetLeft, e2 = this.shadow.offsetTop;
          if (t2 === this.shadow_p_x && e2 === this.shadow_p_y)
            return;
          this.shadow_p_x = t2, this.shadow_p_y = e2;
          let s2 = this.shadow_p_x + this.shadow_w / 2 >= this.get_root_x() ? i.default.direction.right : i.default.direction.left, o2 = this.lookup_overlapping_node_parent(s2) || this.lookup_close_node(s2);
          if (o2) {
            let t3 = this.calc_point_of_node(o2, s2), e3 = i.default.node.inherited(this.active_node, o2);
            this.magnet_shadow(t3.sp, t3.np, e3), this.target_node = o2, this.target_direct = s2;
          }
        }
        get_root_x() {
          let t2 = this.jm.get_root(), e2 = t2.get_location(), i2 = t2.get_size();
          return e2.x + i2.w / 2;
        }
        lookup_overlapping_node_parent(t2) {
          let e2 = this.shadow.getBoundingClientRect(), i2 = e2.x + e2.width * (1 - t2) / 2, s2 = (this.jm.options.layout.hspace + this.jm.options.layout.pspace) * t2, o2 = e2.height, n2 = [[i2, e2.y], [i2, e2.y + o2 / 2], [i2, e2.y + o2], [i2 + s2 / 2, e2.y], [i2 + s2 / 2, e2.y + o2 / 2], [i2 + s2 / 2, e2.y + o2], [i2 + s2, e2.y], [i2 + s2, e2.y + o2 / 2], [i2 + s2, e2.y + o2]];
          for (const t3 of n2) {
            let e3 = this.lookup_node_parent_by_location(t3[0], t3[1]);
            if (e3)
              return e3;
          }
        }
        lookup_node_parent_by_location(t2, e2) {
          return s.d.elementsFromPoint(t2, e2).filter((t3) => "JMNODE" === t3.tagName && t3.className !== this.options.shadow_node_class_name).map((t3) => this.jm.view.get_binded_nodeid(t3)).map((t3) => t3 && this.jm.mind.nodes[t3]).map((t3) => t3 && t3.parent).find((t3) => t3);
        }
        lookup_close_node(t2) {
          return Object.values(this.jm.mind.nodes).filter((e2) => e2.direction == t2 || e2.isroot).filter((t3) => this.jm.layout.is_visible(t3)).filter((e2) => this.shadow_on_target_side(e2, t2)).map((e2) => ({ node: e2, distance: this.shadow_to_node(e2, t2) })).reduce((t3, e2) => t3.distance < e2.distance ? t3 : e2, { node: this.jm.get_root(), distance: Number.MAX_VALUE }).node;
        }
        shadow_on_target_side(t2, e2) {
          return e2 == i.default.direction.right && this.shadow_to_right_of_node(t2) > 0 || e2 == i.default.direction.left && this.shadow_to_left_of_node(t2) > 0;
        }
        shadow_to_right_of_node(t2) {
          return this.shadow_p_x - t2.get_location().x - t2.get_size().w;
        }
        shadow_to_left_of_node(t2) {
          return t2.get_location().x - this.shadow_p_x - this.shadow_w;
        }
        shadow_to_base_line_of_node(t2) {
          return this.shadow_p_y + this.shadow_h / 2 - t2.get_location().y - t2.get_size().h / 2;
        }
        shadow_to_node(t2, e2) {
          return (e2 === i.default.direction.right ? Math.abs(this.shadow_to_right_of_node(t2)) : Math.abs(this.shadow_to_left_of_node(t2))) + Math.abs(this.shadow_to_base_line_of_node(t2));
        }
        calc_point_of_node(t2, e2) {
          let i2 = t2.get_size(), s2 = t2.get_location(), o2 = t2.isroot ? s2.x + i2.w / 2 : s2.x + i2.w * (1 + e2) / 2 + this.options.line_width * e2, n2 = s2.y + i2.h / 2;
          return { sp: { x: this.shadow_p_x + this.shadow_w * (1 - e2) / 2 - this.options.line_width * e2, y: this.shadow_p_y + this.shadow_h / 2 }, np: { x: o2, y: n2 } };
        }
        move_node(t2, e2, s2) {
          var o2 = this.shadow.offsetTop;
          if (e2 && t2 && !i.default.node.inherited(t2, e2)) {
            for (var n2 = e2.children, h2 = n2.length, l2 = null, a = Number.MAX_VALUE, _ = null, d = "_last_"; h2--; )
              if ((l2 = n2[h2]).direction == s2 && l2.id != t2.id) {
                var r = l2.get_location().y - o2;
                r > 0 && r < a && (a = r, _ = l2, d = "_first_");
              }
            _ && (d = _.id), this.jm.move_node(t2.id, d, e2.id, s2);
          }
          this.active_node = null, this.target_node = null, this.target_direct = null;
        }
        jm_event_handle(t2, e2) {
          t2 === i.default.event_type.resize && this.resize();
        }
      }
      var l = new i.default.plugin("draggable_node", function(t2, e2) {
        var i2 = new h(t2, e2);
        i2.init(), t2.add_event_listener(function(t3, e3) {
          i2.jm_event_handle.call(i2, t3, e3);
        });
      });
      i.default.register_plugin(l);
    });
  }
});
export default require_jsmind_draggable_node();
/*! Bundled license information:

jsmind/es6/jsmind.draggable-node.js:
  (**
  * @license BSD-3-Clause
  * @copyright 2014-2023 hizzgdev@163.com
  *
  * Project Home:
  *   https://github.com/hizzgdev/jsmind/
  *)
*/
//# sourceMappingURL=jsmind_draggable-node.js.map
