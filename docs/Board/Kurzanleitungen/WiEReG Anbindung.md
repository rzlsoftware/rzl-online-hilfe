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
finden Sie in der Anwendungshilfe des BMF.

## USP-Zuweisungen

Die Zuweisungen zu den Unternehmensserviceportal Eingängen können im
KIS-Navigator unter *Verwaltung / USP – Zuweisungen* vorgenommen werden.

![Zuweisungen](<img/image182.png>)

### Ablage der Auszüge

Innerhalb der USP-Zuweisungen können Sie festlegen mit welcher Kategorie
und welchem Thema die jeweiligen Auszüge strukturiert im KIS abgelegt
werden sollen. Über die Schaltflächen Thema bzw. Kategorie übernehmen
können diese Einstellungen von den Zuweisungen für den einfachen Auszug
auf alle anderen Auszüge übernommen werden.

![Zuweisung Kategorie und Thema](<img/image183.png>)

### Aufgabenvorlage

Unter den USP-Zuweisungen / Aufgabenvorlagen können Sie definieren
welche Aufgabe bei Eintritt der Meldepflicht, bei einer durchgeführten
Meldung sowie bei einem automatischen Abruf des Auszuges erstellt werden
soll. Ebenso wird bei Signal des Änderungsdienstes eine Aufgabe für die Prüfung des Rechtsträgers erstellt (betrifft RT Beendet, RT Insolvent, RT Scheinunternehmen, RT Sanktioniert)
Voraussetzung hierfür ist die Anlage und Hinterlegung einer entsprechenden Aufgabenvorlage.

![Zuweisung Aufgabenvorlage](<img/USP Zuweisungen Aufgabenvorlagen.png>)

## Überprüfung durchführen

In den Klientenstammdaten der Stammdatenverwaltung am RZL Board im
Register *WiEReG / Überprüfung* haben Sie die Möglichkeit zu
hinterlegen, ob eine Meldung der wirtschaftlichen Eigentümer
erforderlich ist und von wem diese Meldung durchgeführt wurde. Diese
Felder werden Ihnen in den Klientenstammdaten angezeigt, sofern beim
Klienten eine juristische Person hinterlegt ist. Über die Schaltfläche
*Neue Überprüfung* **(1)** können Sie für ein bestimmtes Datum eine neue
Meldung anlegen. Da die Meldung auch vom Rechtsträger selbst erfolgen
kann, kann auch der Klient als Überprüfer vermerkt werden.

![neue Überprüfung](<img/image185 copy.png>)

## Meldung durchführen

In den Klientenstammdaten des RZL Boards unter dem Register Meldung
haben Sie die Möglichkeit WiEReG-Meldungen durchzuführen sowie die
Dokumentation zu einer Meldung hinzuzufügen.

Bei Mitarbeitern mit dem Recht zur Durchführung von WiEReG-Meldungen ist
die entsprechende Berechtigung seitens USP/FinanzOnline für die
Mitarbeiter notwendig.

### Neue Meldung über USP

In den Klientenstammdaten der Stammdatenverwaltung am RZL Board im
Register *WiEReG / Meldung* haben Sie die Möglichkeit mit einem Klick
auf den Button *Neue Meldung / Neue Meldung über USP* **(1)** eine neue
WiEReG-Meldung durchzuführen.

![neue Meldung über USP](<img/image186 copy.png>)

Dabei werden Sie automatisch mit Ihrem KIS-Mitarbeiterzugang zum
Anmeldeformular auf der USP-Website verlinkt und können anschließend die
Meldung durchführen. Für die Anmeldung auf der USP-Website wird der im
KIS unter *Verwaltung / FinanzOnline/USP-Zugänge* hinterlegte
Mitarbeiterbenutzer verwendet. Dieser benötigt die entsprechende
Berechtigung seitens USP/FinanzOnline um WiEReG-Meldungen durchführen zu
können.

![USP](<img/image187 copy.png>)

Haben Sie die Meldung auf dem USP-Portal durchgeführt und wechseln
zurück in das RZL Board können Sie mit einem Klick auf den Button
*Durchgeführt* die Durchführung der WiEReG-Meldung bestätigen. Weiters
erhalten Sie die Information, dass ein manueller Abruf des Auszuges mit
5 Minuten Verzögerung erfolgen kann sowie, dass bei einer automatischen
Abfrage diese am Folgetag durchgeführt wird.

![Abfrage nach WiEReG Meldung](<img/image188 copy.png>)

### Dokumentation zur Meldung

Führen Sie die WiEReG Meldung nicht über das Board durch oder wollen Sie
vergangene Meldungen eintragen, haben Sie die Möglichkeit mit einem
Klick auf den Button *Neue Meldung / Dokumentation zur Meldung über USP*
**(1)** eine ausführliche Dokumentation zur erfolgten Meldung
hinzuzufügen

![Dokumentation zur Meldung](<img/image189 copy.png>)

Mit einem Klick auf das ![Dokumentensymbol](<img/image190 copy.png>) können Sie noch etwaige
Dokumente (z.B. Auszüge) zu dieser Meldung hinterlegen.

## Auszüge anfordern

Auszüge aus dem Melderegister können entweder manuell oder automatisch
(in einem vordefinierten Zeitintervall oder bei Signal des
Änderungsdienstes) über das RZL Board angefordert werden. Dabei ist es
wie bei der Durchführung einer Meldung erforderlich, dass der
Mitarbeiter, der den Auszug anfordert die entsprechende Berechtigung von
USP/FinanzOnline hat.

Die Anforderung von WiEReG-Auszügen können Sie über den Menüpunkt
*PORTALE* im RZL Board vornehmen.

![USP](<img/image191 copy.png>)

## Auszüge manuell anfordern

Mit einem Klick auf den Button Auszug anfordern haben Sie die
Möglichkeit manuell vier verschiedene Arten von Auszügen anzufordern.

![Auszug anfordern I](<img/image192 copy.png>)

**Einfacher Auszug**

Bietet eine solide Übersicht über die wirtschaftlichen Eigentümer einer
juristischen Person. Beinhaltet allgemeine Informationen wie Name und
Rechtsform sowie Adressen und Stammregisternummern (z.B.
Firmenbuchnummer) und ermöglichen die Feststellung der wirtschaftlichen
Aktivität anhand der ÖNACE Branchenkennzahl. Darüber hinaus sind alle
Daten über direkte und indirekte Eigentümer inklusive der Art und dem
Umfang des wirtschaftlichen Interesses enthalten.

**Erweiterter Auszug**

Enthalten über die in den einfachen Auszügen enthaltenen Daten hinaus
noch die folgenden Informationen:

- Die Angabe, ob es sich um einen vollständigen erweiterten Auszug
  handelt.

- Darstellung der relevanten Beteiligungsstruktur, die auf Basis der
  Daten des Firmenbuchs errechnet wird.

- Den errechneten wirtschaftlichen Eigentümer und oberste Rechtsträger,
  die auf Basis der Daten des Firmenbuchs, des Vereinsregisters und des
  Ergänzungsregisters errechnet werden.

Nach Auswahl des gewünschten Auszuges müssen Sie die Stammzahl
(Firmenbuchnummer, ZVR-Zahl oder Ordnungsnummer des Ergänzungsregisters)
des jeweiligen Klienten eintragen und können den Auszug mit einem Klick
auf den Button *Auszug abrufen* abrufen.

![Eingabe Stammzahl](<img/image193 copy.png>){width="500"}

In den Klientenstammdaten unter dem Register *WiEReG* haben Sie über die
Schaltfläche *Auszug anfordern* ebenso die Möglichkeit einen Auszug für
den ausgewählten Klienten anzufordern. Hier ist keine Eingabe der
Stammzahl erforderlich.

![Auszug anfordern II](<img/image194 copy.png>)

Die angeforderten Auszüge sind anschließend im Board unter den
Klientenstammdaten im Register *WiEReG* mit einem Klick auf den Button
*WiEReG Dokumente* verfügbar.

Ebenso können Sie angeforderte WiEReG-Dokumente in den Dokumentenlisten
auf den Ebenen Mein Arbeitsplatz, Klient oder Kanzlei des
Kanzleiinformationssystems aufrufen.

![Auszug in Dokumente](<img/image195 copy.png>)

## Auszüge automatisch anfordern

Mithilfe der Schaltfläche Klienten erhalten Sie eine Liste aller Ihrer
Klienten wo bereits eine Zuordnung zur automatischen Abfrage vorgenommen
wurde.

In dieser Liste können Sie erkennen, welche Art von Auszügen entweder
bei Signal des Änderungsdienstes, jährlich zu einem bestimmten Datum
oder stets bei Signal des Änderungsdienstes und jährlich zu einem
bestimmten Datum abgefragt wird. Weiters enthält diese Übersicht die von
Ihnen vorgenommene Risikoeinstufung, die Information ob eine Meldung
erforderlich ist und den Zeitpunkt der letztmalig durchgeführten
Meldung.

![WiEReG Klienten](<img/image196.png>)

Über den Button ![Klienten zuordnen](<img/image197.png>) kommen Sie in die
Zuordnung der Klienten für den automatischen Abruf des Auszuges.

![Klienten für autom Abruf zuordnen](<img/image198.png>)

Wählen Sie einen Klienten in der Liste aus können Sie mit Hilfe der
Schaltfläche *Auszugsart wählen* festlegen welche Art von Auszug bei
diesem Klienten abgerufen werden soll bzw. die bereits ausgewählte Art
wieder entfernen.

![Auszugsart wählen](<img/image199.png>){width="400"}

Über den Button *Bei Signal des Änderungsdienstes* können Sie bei dem
jeweilig ausgewählten Klienten definieren, ob ein Auszug bei einer
Änderung im WiEReG-Meldeportal automatisiert abgerufen bzw. ein
gesetzter Abruf aufgehoben werden soll.

![Signal des Änderungsdienstes](<img/image200.png>){width="500"}

Mit einem Klick auf die Schaltfläche *Jährlich zu einem bestimmten Datum
/ Datum setzen* kann unabhängig von der Einstellung beim Abruf bei
Signal des Änderungsdienstes ein Tag definiert werden an dem jährlich
automatisch ein Auszug abgerufen wird. Somit haben Sie die Möglichkeit
jährlich einen Auszug abzurufen, auch ohne, dass eine Änderung erfolgt.
Über den Punkt Datum löschen kann der eingetragene Tag wieder entfernt
werden.

![jährl zu einem bestimmten Datum](<img/image201.png>){width="500"}

Im folgenden Dialog kann der jeweilige Tag definiert werden.

![Tag und Monat definieren](<img/image202.png>){width="400"}

Die oben beschriebenen Einstellungen zur Festlegung der Art des Auszuges
und der Aktivierung der Abfrage des Auszuges bei Signal des
Änderungsdienstes bzw. der Abfrage zu einem bestimmten Datum können im
RZL Board unter *Stamm / Klienten* nach Auswahl eines Klienten im
Register *WiEReG / Einstellungen* ebenso individuell pro Klient
vorgenommen werden.

![Art des Auszugs hinterlegen](<img/image203.png>)

Über ![Protokoll Abruf Auszüge](<img/image204.png>) im Bereich Portale im RZL
Board öffnet sich das Abrufprotokoll zu allen bisher durchgeführten
Abrufen von Auszügen aus dem RZL Board. Hier wird aufgelistet welcher
Mitarbeiter zu welchem Zeitpunkt welche Art von Auszug abgefragt hat.
Weiters werden die Kosten pro Auszug mitprotokolliert und für welchen
Klienten inkl. Stammzahl die Abfrage erfolgt ist.