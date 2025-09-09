# Stammdaten Dienstnehmer

In diesem Bildschirm sind die persönlichen Daten des Dienstnehmers (Name, Adresse usw.), der Beruf, die Bankverbindung, die Angaben zum Ehegatten und zu den Kindern einzugeben.

![Image](<img/image49.png>)

## Klient (UDG)

In diesem Eingabefeld kann ein Dienstnehmer einem eventuellen Unterdienstgeber zugeordnet werden. Mittels *F2-Taste* werden die bereits angelegten Unterdienstgeber aufgerufen.

## Dienstnehmer

**Name des Dienstnehmers**

Eingabe des Familiennamens des Dienstnehmers mit bis zu 70 Zeichen.

**Vorname**

Eingabe des Vornamens des Dienstnehmers mit bis zu 70 Zeichen.

**Früherer Name**

Eingabe eines früheren Familiennamens mit bis zu 70 Zeichen.

**Akademischer Grad, Akademischer Grad2**

Eingabe der akademischen Grade durch Auswahl aus der jeweiligen Liste.

Diese Liste der akademischen Grade ist von der ÖGK vorgegeben und wird für die elektronische Übermittlung der Anmeldung benötigt. Da die Liste sehr umfangreich ist, kann der entsprechende akademische Grad durch Eingabe der Anfangsbuchstaben (Match-Code) angewählt werden.

**Straße**

Eingabe der Straßenbezeichnung und Hausnummer mit bis zu 50 Zeichen.

**PLZ, Ort**

Eingabe der Landeskennzeichnung für die Postleitzahl, sowie der Postleitzahl selbst. Aufruf aller österreichischen Postleitzahlen mit der *F2-Taste*. Nach Eingabe der Postleitzahl wird automatisch der Ort vorgeschlagen. Dieser kann jedoch im Bedarfsfall überschrieben werden.

**Telefon**

Eintragungsmöglichkeit für die Telefonnummer des Dienstnehmers.

**E-Mail-Adresse, PDF-Passwort**

Über den RZL-PDF-Drucker können die Abrechnungen per E-Mail versendet werden. Dazu muss hier die E-Mail-Adresse des Dienstnehmers eingetragen werden. Im Feld *PDF-Passwort* kann ein Kennwort (mit bis zu 16 Stellen) für die als PDF verschickte Abrechnung vergeben werden.

**Dienstnehmer am Klientenportal anlegen**

Wenn *E-Mail-Adresse* und *PDF-Passwort* eingetragen sind, kann dieses Feld aktiviert werden. Der Dienstnehmer wird am Klientenportal angelegt und mit Hilfe des RZL-PDF-Druckers können die Abrechnungen der Dienstnehmer auf das Klientenportal geladen werden.

Vgl. [Abrechnungen der Dienstnehmer bereitstellen](../RZL_Klientenportal.md)

**SV-Nummer**

Eingabe der zehnstelligen Versicherungsnummer. Die Versicherungsnummer wird im Zusammenhang mit dem Geburtsdatum vom Programm auf Korrektheit überprüft. Für die Anmeldung des Dienstnehmers ist die Versicherungsnummer nicht unbedingt notwendig. Sie können eine Versicherungsnummer-Anforderung über die ÖGK-Datei anfordern.

**Geburtsdatum**

Eingabe des Geburtsdatums des Dienstnehmers. Das Geburtsdatum ist für die Anmeldung bei der ÖGK ein Pflichtfeld und wird im Zusammenhang mit der Versicherungsnummer auf Korrektheit überprüft (Prüfziffernverfahren). Im Falle eines Fehlers wird dies durch die Meldung *„Ungültige SV-Nummer oder Geburtsdatum“* angezeigt.

**Geburtsort**

Eintragungsmöglichkeit für den Geburtsort des Dienstnehmers.

**Geschlecht**

Bestimmung des Geschlechts des Dienstnehmers durch Auswahl eines der folgenden Einträge: männlich, weiblich, divers, offen, inter, kein Eintrag

**Familienstand**

Eingabe des Familienstandes durch Auswahl eines der folgenden Einträge:

![Image](<img/image50.png>)

**Staat**

Eingabe des Staatsbürgerschaftsschlüssels laut Österreichischer Gesundheitskasse. Die Eingabe der Kennziffer ist für die An- und Abmeldungen erforderlich, wobei alle in der Liste der ÖGK angeführten Länder bereits im Programm verankert sind.

!!! info "Tipp"
    Mit der *F2-Taste* werden die angelegten Länder aufgerufen und können übernommen werden.

**externe DN-Nummer**

Wenn in den Stammdaten des Klienten im Registerblatt [*Neufög, BUAK, ELDA*](../Klientenstammdaten/Stammdaten Klient/Neufög, BUAK, ELDA.md) das Feld *externe DN-Nummer* aktiviert ist, kann hier diese extra Nummer eingetragen werden. Diese Nummer kann beim Ausdruck der Abrechnungen, beim Datenimport und Datenexport verwendet werden.

## Beruf

**Beruf**

Eingabe des Berufes mit bis zu 30 Stellen.

**Dienstort**

Ist der Dienstort nicht am Ort des Dienstgebers, so kann hier ein abweichender Dienstort eingegeben werden. Der Dienstort scheint auf dem Dienstzettel auf.

**Arbeitsstätte**

vgl. [Arbeitsstätten – Lohnzettel Finanz](../Klientenstammdaten/Arbeitsstätten - Lohnzettel Finanz.md)

**Gesundheitsberuf**

Seit 1.1.2018 müssen Dienstgeber, sofern sie Berufsangehörige der Pflege bzw. der medizinisch-technischen Dienste neu aufnehmen, eine Gesundheitsberuferegistermeldung durchführen. Diese Meldung wird bei einer Neuanlage des Dienstnehmers abgefragt und über die ELDA-Software an die ÖGK übermittelt.

![Image](<img/image51.png>)

## Bankverbindung

Die Bankverbindung ist dann einzugeben, wenn der Lohn/Gehalt an den Dienstnehmer überwiesen werden soll, entweder durch Ausdruck von Zahlscheinen oder mittels Elektronik Banking.

**Land**

In diesem Feld besteht die Möglichkeit eine Kurzbezeichnung für das Land der Bankverbindung des Dienstnehmers einzutragen. Eine Eintragung ist derzeit nur notwendig, wenn Elektronik Banking in das EU-Ausland durchgeführt werden soll. Wird hier keine Eintragung gemacht (oder AT für Österreich), wird der Dienstnehmer bezüglich Elektronik Banking automatisch dem Inlandszahlungsverkehr zugeordnet.

!!! info "Tipp"
    Mit der *F2-Taste* können in diesem Feld die ISO-Codes der einzelnen Länder aufgerufen werden.

**Bankleitzahl**

Für die Bankleitzahl des (österreichischen) Geldinstitutes des Dienstnehmers sind 5 Zahlen zulässig. Aufgrund der hier eingetragenen Bankleitzahl wird das (österreichische) Kreditinstitut vorgeschlagen.

!!! info "Tipp"
    Mit der *F2-Taste* kann eine Liste der österreichischen Kreditinstitute aufgerufen werden.

**Bank**

Eintragung der Bezeichnung der Bank mit bis zu 15 Buchstaben, an die der Lohn/Gehalt des Dienstnehmers überwiesen werden soll. Aufgrund der oben eingetragenen Bankleitzahl erfolgt ein Vorschlag vom Programm.

**Kontonummer**

Eingabe der (österreichischen) Kontonummer des Dienstnehmers mit bis zu 11 Ziffern. Es sind nur Ziffern erlaubt, keine anderen Zeichen.

**IBAN**

Durch die generelle Umstellung auf IBAN und BIC ist hier der IBAN des Dienstnehmers einzutragen.

!!! info "Tipp"
    Durch Anwahl der *F2-Taste* wird der IBAN aus Bankleitzahl und Kontonummer errechnet und vorgeschlagen.

**BIC (internationaler Bankcode)**

Wenn die Bankleitzahl eingetragen wird, wird in diesem Feld automatisch der korrekte BIC (Bank Identifier Code, auch bekannt als SWIFT-Code) vorgeschlagen. Dieser BIC ist eine eindeutige, weltweit gültige Kennung der Bank.

!!! info "Tipp"
    Durch Anwahl der *F2-Taste* wird die Liste mit BICs aufgerufen. Wenn in diesem Feld die Bankleitzahl eingetragen und anschließend die *F2-Taste* gedrückt wird, wird der BIC vorgeschlagen und kann übernommen werden. Diese Vorgehensweise ist nur bei bereits vorhandenen Bankverbindungen notwendig (nicht bei Neueintragungen).

**Abweichender Kontoinhaber**

Unter *abw. Kontoinhaber* haben Sie die Möglichkeit, einen abweichenden Namen des Kontoinhabers einzutragen.

**Dienstgeber-Bank**

Es kann hier verankert werden, ob die Lohn-/Gehaltsüberweisung an den Dienstnehmer immer nur von der ersten Bankverbindung oder von der zweiten Bankverbindung des Dienstgebers erfolgen soll. Die Eingabe von *&lt;keine&gt;* bedeutet, dass keine Festlegung erfolgt und jeweils von der, bei der Überweisung angewählten Bank, vorgenommen wird.

## Einsatzdienststelle – Adresse der Arbeitsstätte - Freiwilligenmeldung

Für Dienstnehmer, die ein freiwilliges soziales Jahr absolvieren, muss am L16 die Einsatzdienststelle gemeldet werden. Diese Meldung erfolgt nicht automatisch, sondern muss im Rahmen der Lohnzettelerstellung in der Sonderübermittlung aktiviert werden.

## (Ehe)Partner

**Name**

Eintragung des Namens des Ehepartners.

**SV-Nummer – Geburtsdatum**

Eintragung von SV-Nummer und Geburtsdatum.

**Unterhalt**

Ist der Ehepartner dem Dienstnehmer gegenüber unterhaltsberechtigt, ist dieses Feld zu aktivieren. Die Unterhaltspflicht wird bei der automatischen Exekutionsberechnung berücksichtigt. Weiters wird der Ehepartner beim Ausdruck der Drittschuldner-Erklärung als unterhaltsberechtigt angedruckt.

!!! info "Tipp"
    Wird ein Alleinverdienerabsetzbetrag beantragt, sind der Name und das Geburtsdatum des Ehepartners für die elektronische Übermittlung des Lohnzettels einzutragen.

## Kinder

**Name**

Eintragung des Namens des Kindes.

**SV-Nummer – Geburtsdatum**

Eintragung von SV-Nummer und Geburtsdatum.

**Unterhalt**

Ist das Kind dem Dienstnehmer gegenüber unterhaltsberechtigt, ist dieses Feld zu aktivieren. Die Unterhaltspflicht wird bei der automatischen [Exekutionsberechnung](../Exekutionen/Exekutionsberechnung.md) berücksichtigt. Weiters wird das Kind beim Ausdruck der Drittschuldnererklärung als unterhaltsberechtigt angedruckt.

**Kind § 106 EStG**

Liegt ein Kind gemäß § 106 EStG vor, so kann dieses Feld aktiviert werden. Im Abrechnungsbildschirm [*Lohnsteuer*](../Abrechnungsbildschirme/Lohnsteuer.md) im Bereich *Absetzbeträge* kann im Feld *Anzahl Kinder §&nbsp;106* durch Anwahl der *F2-Taste* die Anzahl der Kinder gemäß §&nbsp;106&nbsp;EStG übernommen werden.

**Familienbeihilfe**

Hier muss für den Familienbonus Plus der Zeitraum des Anspruchs auf Familienbeihilfe eingetragen werden.

**Familienbonus Plus**

Durch Aktivieren dieses Punktes kann der Familienbonus Plus abgerechnet werden. Nach der Aktivierung geben Sie die Daten lt. E30 Formular ein. Je nach dem, was angegeben wurde, geben Sie den Familienbonusbezieher und die Familienbonushöhe an.

Grundvoraussetzung für den Anspruch auf Familienbonus Plus ist der Anspruch auf die Familienbeihilfe. Die Kinder müssen sich ständig in Österreich, im EU/EWR-Raum oder in der Schweiz aufhalten.

Die Höhe dieses Absetzbetrages richtet sich nach dem Alter des Kindes und beträgt:

- bis zum Monat in dem das Kind das 18. Lebensjahr vollendet **EUR 166,68** / Kalendermonat (= EUR 2.000,00 / Jahr)
- ab dem 18. Lebensjahr des Kindes **EUR 58,34** / Kalendermonat (= EUR 700,08 / Jahr)

Im Feld *Wohnsitz* kann mit der *F2-Taste* eine Liste mit den Ländercodes aufgerufen werden.

Aufgrund des Geburtsdatums des Kindes und dem Anspruchszeitraum für die Familienbeihilfe wird vom RZL-Lohnprogramm geprüft, ob weiterhin Anspruch auf FABO+ besteht. Ist dies nicht der Fall, wird der FABO+ automatisch deaktiviert, da ein Fortlaufen des Anspruchs nur im Falle von neuen Bestätigungen durch den Dienstnehmer möglich ist.

Es können nur folgende Personen den Familienbonus Plus in Anspruch nehmen:

- Familienbeihilfeberechtigte
- der Ehepartner des Familienbeihilfenberechtigten (eingetragene   Partner, Lebensgemeinschaft über 6 Monate)
- Unterhaltsverpflichtete, welche auch tatsächlichen Unterhalt leisten.

Der FABO+ kann von einer der Personen zu 100&nbsp;% in Anspruch genommen werden oder zwischen zwei beteiligten Personen jeweils zu 50&nbsp;% aufgeteilt werden.

## Pauschale Reiseaufwandsentschädigung – nur Ausweis auf L19

Sie haben die Möglichkeit, eine bereits ausbezahlte Pauschale Reiseaufwandsentschädigung rein für das L19 Formular nach zu erfassen.

Hierfür legen Sie sich unter *Abrechnungen / [Neuanlage Dienstnehmer](../Abrechnungen/Neuanlage_Dienstnehmer.md)* den betroffenen Dienstnehmer an.

Erfassen Sie im Abrechnungsbildschirm [*Stammdaten Dienstnehmer*](../Abrechnungsbildschirme/Stammdaten_Dienstnehmer.md) folgende Pflichtfelder:

- Name
- Vorname
- Straße
- PLZ / Ort
- Geburtsdatum

Ganz unten in diesem Abrechnungsbildschirm finden Sie eine Ausfüllbox für das L19 Formular.

![Image](<img/image52.png>)

Aktivieren Sie durch Setzen eines Häkchens die *Pauschale Reiseaufwandsentschädigung* *– nur Ausweis auf L19*. Tragen Sie unter *Bereits ausgezahlte PRAE* den Gesamtbetrag der Pauschalen Reiseaufwandsentschädigung des Kalenderjahres ein. Bei *Zeitraum von bis* tragen Sie den Zeitraum ein, in welcher der Dienstnehmer die PRAE erhalten hat.

!!! warning "Hinweis"
    Die Übermittlung des L19 ist auch ohne SV-Nummer möglich. Das Geburtsdatum ist jedoch ein Pflichtfeld.

![Image](<img/image53.png>)

Eine vollständige Nacherfassung ist somit nicht erforderlich.

!!! warning "Hinweis"
    Durch die reine Stammdateneingabe brauchen Sie nur den Bildschirm *Stammdaten Dienstnehmer* befüllen, alle anderen Bildschirme können Sie außer Acht lassen. Diese Eingabe dient rein zur Erstellung und Übermittlung des L19 Formulars. Es kommt zu **keiner** Auszahlung der Pauschalen Reiseaufwandsentschädigung.

!!! warning "Hinweis"
    Für freie Dienstnehmer ist **kein** L19-Formular erforderlich. Die PRAE (Pauschale Reiseaufwandsentschädigung) muss vom freien Dienstnehmer im Rahmen der Einkommensteuererklärung selbst bekannt gegeben werden. ([Weitere Informationen finden Sie in den FAQs auf der Website von Sport Austria unter dem Punkt: „Welche Meldepflicht besteht, wenn Leistungen mit Honorarnoten bezahlt werden?“](https://www.sportaustria.at/de/service-center/recht-und-finanzen/aufwandsentschaedigung-und-abrechnungsformulare#c5557))
