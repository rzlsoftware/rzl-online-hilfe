Mit dem Modul **WiEReG Anbindung** kann eine Verlinkung zum Einmeldeformular auf der
USP-Website hergestellt werden. Ebenso besteht die Möglichkeit
WiEReG-Auszüge in einem gewissen Intervall bzw. bei erfolgter Änderung
automatisiert abzurufen.

Damit im Zusammenhang stehend können Sie Mithilfe einer Aufgabenvorlage
definieren ob und welche Aufgabe für den jeweilig zuständigen
Mitarbeiter generiert werden soll.

Voraussetzung für das automatisierte Auslesen der WiEReG-Meldungen bzw.
das Abrufen von WiEReG-Auszügen ist, dass innerhalb von USP ein Benutzer
für **WebService** angelegt ist.

![USP WebService Zugang](<img/image180.png>)

Nach Anwahl des Eintrags Neuer Zugang sind die Zugangskennungen für den
im USP angelegten WebService-Benutzer (Benutzer ID und Passwort)
einzugeben.

Im Bereich Zuordnung müssen Sie den Eintrag Web-Service USP anwählen.
Der Benutzer kann durch Anwahl des Felds aktiv deaktiviert werden.

## Exkurs: Anlage eines WebService-Benutzers

In der Administratorverwaltung des USP ist der Menüpunkt zu finden mit
dem WebServicekontos angelegt werden können. Das Anlegen funktioniert
ähnlich wie die Anlage von Benutzern mit dem Unterschied, dass keine
Personifizierung erforderlich ist.

![Anlage WebService im USP](<img/image181.png>)

Nachdem ein WebService-Konto angelegt wurde, kann man über den Menüpunkt
„WebService-Rechte verwalten“ die entsprechende Berechtigung vergeben.
Der WebService-Benutzer für das RZL KIS/Board benötigt folgende
Berechtigungen:

- WiEReG - WebService Datenabgleich: Zum Abruf von Auszügen und
  XML-Dateien

- WiEReG - Änderungsdienst: Zur Information über Änderungen bei den
  gemeldeten wirtschaftlichen Eigentümern ihrer Kunden

Eine ausführliche Dokumentation zur Anlage eines Webservicebenutzers
finden Sie in der Anwendungshilfe des BMF oder Sie klicken [hier.](<https://www.usp.gv.at/ueber-das-usp/index/faq/usp-administrator-und-benutzer.html>)
