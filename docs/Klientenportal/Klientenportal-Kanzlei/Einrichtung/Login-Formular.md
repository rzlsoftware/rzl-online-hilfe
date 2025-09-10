# Login Formular auf Ihrer Kanzlei-Homepage

Sie können auf der Kanzlei-Homepage ein Login Formular für das Klientenportal platzieren.

Dieses Formular muss die Daten mittels HTTP-POST übertragen und die beiden Felder UserName und Passwort enthalten. 

Als Ziel (action) muss bei der Nutzung am RZL Webserver <https://klientenportal.at/XXX/Login.aspx> eingetragen werden. 
XXX ist durch Ihre Anwendernummer zu ersetzen.



Im einfachsten Fall sieht das dann so aus:
```
\<form action=\"<https://klientenportal.at/XXX/Login.aspx>\"method=\"post\"\>

 \<div\>Benutzername: \<input type=\"text\"name=\"UserName\" /\>\</div\>

 \<div\>Kennwort: \<input type=\"password\"name=\"Password\" /\>\</div\>

 \<div\>\<input type=\"checkbox\" name=\"ResetPw\"value=\"true\" /\>Passwort zur&uuml;cksetzen\</div\>

 \<div\>\<input type=\"submit\" name=\"LoginFull\"value=\"Login\" /\>\</div\>

 \<div\>\<input type=\"submit\" name=\"LoginMobile\"value=\"Login (Mobile Version)\" /\>\</div\>

\</form\>

```