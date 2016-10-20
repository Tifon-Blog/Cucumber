$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("application.feature");
formatter.feature({
  "line": 1,
  "name": "Haciendo pruebas de aceptacion",
  "description": "",
  "id": "haciendo-pruebas-de-aceptacion",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Probando Login",
  "description": "",
  "id": "haciendo-pruebas-de-aceptacion;probando-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Abrir navegador e ir a la direccion de la aplicacion",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Yo ingreso usuario \"\u003cusuario\u003e\" y contraseña \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Yo hago click en el boton entrar",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "visualizo el mensaje de respuesta \"\u003cmensaje\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "haciendo-pruebas-de-aceptacion;probando-login;",
  "rows": [
    {
      "cells": [
        "usuario",
        "password",
        "mensaje"
      ],
      "line": 10,
      "id": "haciendo-pruebas-de-aceptacion;probando-login;;1"
    },
    {
      "cells": [
        "yan123",
        "yan",
        "Incorrectos"
      ],
      "line": 11,
      "id": "haciendo-pruebas-de-aceptacion;probando-login;;2"
    },
    {
      "cells": [
        "yan",
        "",
        "Ingrese todos los datos"
      ],
      "line": 12,
      "id": "haciendo-pruebas-de-aceptacion;probando-login;;3"
    },
    {
      "cells": [
        "",
        "dsf",
        "Ingrese todos los datos"
      ],
      "line": 13,
      "id": "haciendo-pruebas-de-aceptacion;probando-login;;4"
    },
    {
      "cells": [
        "yan",
        "yan",
        "Correctos"
      ],
      "line": 14,
      "id": "haciendo-pruebas-de-aceptacion;probando-login;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Probando Login",
  "description": "",
  "id": "haciendo-pruebas-de-aceptacion;probando-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Abrir navegador e ir a la direccion de la aplicacion",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Yo ingreso usuario \"yan123\" y contraseña \"yan\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Yo hago click en el boton entrar",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "visualizo el mensaje de respuesta \"Incorrectos\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsDefinitions.abrir_navegador_e_ir_a_la_direccion_de_la_aplicacion()"
});
formatter.result({
  "duration": 33619994045,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "yan123",
      "offset": 20
    },
    {
      "val": "yan",
      "offset": 42
    }
  ],
  "location": "LoginStepsDefinitions.yo_ingreso_usuario_y_contraseña(String,String)"
});
formatter.result({
  "duration": 357758947,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element\n  (Session info: chrome\u003d53.0.2785.143)\n  (Driver info: chromedriver\u003d2.9.248315,platform\u003dWindows NT 6.3 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 332 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u0027unknown\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:43:45 -0700\u0027\nSystem info: host: \u0027sebithas\u0027, ip: \u0027192.168.1.12\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_71\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\cpe\\AppData\\Local\\Temp\\scoped_dir132368_13887}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d53.0.2785.143, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 3c70f27b76bc9a99e074bc575a2da70d\n*** Element info: {Using\u003did, value\u003dusuario}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:417)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat com.edu.eam.pruebasdeaceptacion.steps.LoginStepsDefinitions.yo_ingreso_usuario_y_contraseña(LoginStepsDefinitions.java:30)\r\n\tat ✽.When Yo ingreso usuario \"yan123\" y contraseña \"yan\"(application.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepsDefinitions.yo_hago_click_en_el_boton_entrar()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Incorrectos",
      "offset": 35
    }
  ],
  "location": "LoginStepsDefinitions.visualizo_el_mensaje_de_respuesta(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 12,
  "name": "Probando Login",
  "description": "",
  "id": "haciendo-pruebas-de-aceptacion;probando-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Abrir navegador e ir a la direccion de la aplicacion",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Yo ingreso usuario \"yan\" y contraseña \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Yo hago click en el boton entrar",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "visualizo el mensaje de respuesta \"Ingrese todos los datos\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsDefinitions.abrir_navegador_e_ir_a_la_direccion_de_la_aplicacion()"
});
formatter.result({
  "duration": 20682889861,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "yan",
      "offset": 20
    },
    {
      "val": "",
      "offset": 39
    }
  ],
  "location": "LoginStepsDefinitions.yo_ingreso_usuario_y_contraseña(String,String)"
});
formatter.result({
  "duration": 54815018,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element\n  (Session info: chrome\u003d53.0.2785.143)\n  (Driver info: chromedriver\u003d2.9.248315,platform\u003dWindows NT 6.3 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 53 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u0027unknown\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:43:45 -0700\u0027\nSystem info: host: \u0027sebithas\u0027, ip: \u0027192.168.1.12\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_71\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\cpe\\AppData\\Local\\Temp\\scoped_dir134824_31107}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d53.0.2785.143, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 69cc1f42af1f0a310c56f504e323c630\n*** Element info: {Using\u003did, value\u003dusuario}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:417)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat com.edu.eam.pruebasdeaceptacion.steps.LoginStepsDefinitions.yo_ingreso_usuario_y_contraseña(LoginStepsDefinitions.java:30)\r\n\tat ✽.When Yo ingreso usuario \"yan\" y contraseña \"\"(application.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepsDefinitions.yo_hago_click_en_el_boton_entrar()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Ingrese todos los datos",
      "offset": 35
    }
  ],
  "location": "LoginStepsDefinitions.visualizo_el_mensaje_de_respuesta(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 13,
  "name": "Probando Login",
  "description": "",
  "id": "haciendo-pruebas-de-aceptacion;probando-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Abrir navegador e ir a la direccion de la aplicacion",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Yo ingreso usuario \"\" y contraseña \"dsf\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Yo hago click en el boton entrar",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "visualizo el mensaje de respuesta \"Ingrese todos los datos\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsDefinitions.abrir_navegador_e_ir_a_la_direccion_de_la_aplicacion()"
});
formatter.result({
  "duration": 11574000888,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 20
    },
    {
      "val": "dsf",
      "offset": 36
    }
  ],
  "location": "LoginStepsDefinitions.yo_ingreso_usuario_y_contraseña(String,String)"
});
formatter.result({
  "duration": 9698565,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d53.0.2785.143)\n  (Driver info: chromedriver\u003d2.9.248315,platform\u003dWindows NT 6.3 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 8 milliseconds\nBuild info: version: \u0027unknown\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:43:45 -0700\u0027\nSystem info: host: \u0027sebithas\u0027, ip: \u0027192.168.1.12\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_71\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\cpe\\AppData\\Local\\Temp\\scoped_dir135140_3848}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d53.0.2785.143, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 4236f0451df5a834aaa7d29d7d03c007\n*** Element info: {Using\u003did, value\u003dusuario}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:417)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat com.edu.eam.pruebasdeaceptacion.steps.LoginStepsDefinitions.yo_ingreso_usuario_y_contraseña(LoginStepsDefinitions.java:30)\r\n\tat ✽.When Yo ingreso usuario \"\" y contraseña \"dsf\"(application.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepsDefinitions.yo_hago_click_en_el_boton_entrar()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Ingrese todos los datos",
      "offset": 35
    }
  ],
  "location": "LoginStepsDefinitions.visualizo_el_mensaje_de_respuesta(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 14,
  "name": "Probando Login",
  "description": "",
  "id": "haciendo-pruebas-de-aceptacion;probando-login;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Abrir navegador e ir a la direccion de la aplicacion",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Yo ingreso usuario \"yan\" y contraseña \"yan\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Yo hago click en el boton entrar",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "visualizo el mensaje de respuesta \"Correctos\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsDefinitions.abrir_navegador_e_ir_a_la_direccion_de_la_aplicacion()"
});
formatter.result({
  "duration": 16750466473,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot get automation extension\nfrom disconnected: Unable to receive message from renderer\n  (Session info: chrome\u003d53.0.2785.143)\n  (Driver info: chromedriver\u003d2.9.248315,platform\u003dWindows NT 6.3 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 3.72 seconds\nBuild info: version: \u0027unknown\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:43:45 -0700\u0027\nSystem info: host: \u0027sebithas\u0027, ip: \u0027192.168.1.12\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_71\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\cpe\\AppData\\Local\\Temp\\scoped_dir134716_29260}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d53.0.2785.143, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 053cca9db08b0d0e1e0c6b106aaa5315\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:658)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:882)\r\n\tat com.edu.eam.pruebasdeaceptacion.steps.LoginStepsDefinitions.abrir_navegador_e_ir_a_la_direccion_de_la_aplicacion(LoginStepsDefinitions.java:24)\r\n\tat ✽.Given Abrir navegador e ir a la direccion de la aplicacion(application.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "yan",
      "offset": 20
    },
    {
      "val": "yan",
      "offset": 39
    }
  ],
  "location": "LoginStepsDefinitions.yo_ingreso_usuario_y_contraseña(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepsDefinitions.yo_hago_click_en_el_boton_entrar()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Correctos",
      "offset": 35
    }
  ],
  "location": "LoginStepsDefinitions.visualizo_el_mensaje_de_respuesta(String)"
});
formatter.result({
  "status": "skipped"
});
});