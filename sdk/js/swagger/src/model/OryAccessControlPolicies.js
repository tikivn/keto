/**
 *
 * Package main ORY Keto
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.sh
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/OryAccessControlPolicy'], factory)
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(
      require('../ApiClient'),
      require('./OryAccessControlPolicy')
    )
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {}
    }
    root.SwaggerJsClient.OryAccessControlPolicies = factory(
      root.SwaggerJsClient.ApiClient,
      root.SwaggerJsClient.OryAccessControlPolicy
    )
  }
})(this, function(ApiClient, OryAccessControlPolicy) {
  'use strict'

  /**
   * The OryAccessControlPolicies model module.
   * @module model/OryAccessControlPolicies
   * @version Latest
   */

  /**
   * Constructs a new <code>OryAccessControlPolicies</code>.
   * @alias module:model/OryAccessControlPolicies
   * @class
   * @extends Array
   */
  var exports = function() {
    var _this = this
    _this = new Array()
    Object.setPrototypeOf(_this, exports)

    return _this
  }

  /**
   * Constructs a <code>OryAccessControlPolicies</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OryAccessControlPolicies} obj Optional instance to populate.
   * @return {module:model/OryAccessControlPolicies} The populated <code>OryAccessControlPolicies</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports()
      ApiClient.constructFromObject(data, obj, 'OryAccessControlPolicy')
    }
    return obj
  }

  return exports
})