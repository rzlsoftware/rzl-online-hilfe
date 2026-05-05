# Migration einer Installation mit Datenbank und Dokumentenverwaltung

!!! warning "Hinweis"
    Diese Anleitung ist nur anzuwenden, wenn die RZL Komplettsicherung nicht verwendet werden kann.
    Für die empfohlene Standardvorgehensweise mit der Komplettsicherung siehe:
    [RZL Daten sichern](../../setup/daten-sichern.md)

!!! warning "Hinweis"
    Verwenden Sie diese Anleitung ausschließlich in den folgenden Fällen:

    - Die Datenmenge übersteigt **50 GB**
    - Die Komplettsicherung schlägt mit nicht korrigierbaren Meldungen fehl
    - Die bestehende Hardware ist defekt oder veraltet und eine Datenrettung ist erforderlich

Diese Anleitung beschreibt, wie Sie eine Installation mit einer bestehenden Datenbank auf einen neuen Server oder ein neues Verzeichnis übersiedeln.

## Technische Vorraussetzungen
Bevor Sie mit der Migration beginnen prüfen Sie umbedingt ein die geplante Umgebung den Vorrausetztungen der RZL Programme enspricht.
[Die technischen Vorrausetzungen finden Sie auf unserer Homepage &#8599;](https://rzlsoftware.at/rzl-lizenzbestimmungen){:target="_blank"}

## Grundinstallation
Wir setzen auf der neuen Umgebung eine Grundinstallation vorraus in die Daten wiederhergestellt werden. Hier können Sie genau wie bei einer Neuinstallation vorgehen. [Hierzu pürfen Sie bitte die Ersten Schritte zur Installation](../erste-schritte.md)

## Daten ermitteln / wiederherstellen
Folgende Verzeichnisse und Dateien müssen für die Rekonstruktion der RZL Installation organisiert werden:  

- RZL Datenrepository unter älteren Installationen RZLWin    
- Dokumente-Ordner (bei Verwendung der Dokumentenverwaltung) 
- SQL-Datenbank (samt Filestream bei Dokumentenverwaltung Plus)  

## RZL_Datarepository ermitteln
Standardmäßig liegt das Repository in folgenden Verzeichnissen

Einzelplatzinstallation:   `C:\ProgramData\RZL Software\RZL_Datarepository`
Netzwerkinstallationen:    `R:\RZL_Datarepository`

Der Pfad zum Datarepository kann auch im RZL-Admin unter Information zur Installation abgelesen werden.
Zudem kann der Pfad der Datei config.ini entnommen werden.

Pfad: `C:\Program Files (x86)\RZL Software\RZLWin\config.ini`

## Dokumente der klassichen Dokumentenverwaltung ermitteln und verschieben
Standardmäßig befinden sich die Dokumente/Belege in einem Unterordner des Datenrepository (z. B. `R:\RZL_DataRepository\RZL_DOKUMENTE`). Diese müssen nicht zwingend separat migriert werden, befinden sich diese dirket im Datenrepository. Befindet sich der Ordner an anderer Stelle können Sie den Pfad der RZLDb.ini mittels Eintrag "DocumentRoot" ermitteln.   
Genauso können Sie bei der rekonstruktion der Belege einen neuen Speicherpfad für die Dokumente genau an dieser Stelle festlegen.  

Beispiel für die Anpassung:
```ini
[DMS]
DocumentRoot = D:\RZL\Docs
```
Es sind lokale Laufwerkspfade, Netzlaufwerkspfade und UNC-Pfade möglich.   

Vorgehen:   
1. Beenden Sie alle RZL Programme  
2. Fügen Sie den Eintrag in der RZLDb.ini hinzu  
3. Verschieben Sie ...\RZL_DOKUMENTE auf das neue System  
4. Prüfen Sie, ob NTFS-Rechte bearbeitet werden müssen  
5. Testen Sie, ob die Dokumente aus den RZL Programmen geöffnet werden können  

## SQL-Datenbank ermitteln und migrieren
1. laden Sie das aktuelle [SQL-Server Management Studio &#8599;](https://learn.microsoft.com/de-de/ssms/install/install){:target="_blank"} herunter   
2. Verbinden Sie sich mittels SQL-Server Management Studio mit der für die RZL angelegeten Instsanz (z.B. SQLEPRESS_RZL, SQL_RZL)   
3. Mit Rechtsklick auf die Datenbank > Datenbankeigenschaften > Dateien > Pfad haben Sie einen Einblick wo die Datenbankdateien und der File Stream der Dokumentenverwaltung Plus liegt   

Im Anschluss finden Sie alle Option die Ihnen je nach Systemzustand zur Verfügung stehen:   

## Sichern der Datenbank mittel RZL-Admin    
1. Sichern Sie die Datenbank laut Dokumentation [Sicherung](../../rzladmin/sicherung.md)   
2. Stellen Sie die Datenbank laut Dokumentaiton [Wiederherstellen](../../rzladmin/wiederherstellen.md) her   

## Sichern der Datenbank mittels SQL Management Studio
1. Laden Sie wie unter SQL-Datenbank ermitteln und migieren erwähnt das SQL Management herunter und verbinden Sie sich mit der Instanz
2. Sichern Sie die Datenbank laut [Microsoft-Dokumentation &#8599;](https://learn.microsoft.com/de-de/sql/relational-databases/backup-restore/quickstart-backup-restore-database?view=sql-server-ver17&tabs=ssms){:target="_blank"}
3. Stellen Sie die Datenbank laut [Microsoft Dokumentation &#8599;](https://learn.microsoft.com/de-de/sql/relational-databases/backup-restore/quickstart-backup-restore-database?view=sql-server-ver17&tabs=ssms){:target="_blank"} am neuen Gerät wieder her   

!!!warning "Achtung"
    Das Kaptel Bereinigen von Ressourcen können Sie auslassen. Dies dienst nur dazu die SQL-Instanz in den Ursprünglichen zustand zu versetzen.

## Rekonstrukiton mittels Datenbankdateien
Für die Rekonstuktion rein über die Datenbank Dateien werden folgende Datenein und Verzeichnise benötigt:   
- RZLZMV_XXX.mdf        (Datenbank)   
- RZLZMV_XXX_log.ldf    (Log Datei)   
- RZLZMV_XXX_fs         (Filestream)   

Eine Dokumenation wie Sie die Datenbank auf einer neuen Instanz rekonstruieren finden Sie hier:   
[Verschieben einer FILESTREAM-aktivierten Datenbank &#8599;](https://learn.microsoft.com/de-de/sql/relational-databases/blob/move-a-filestream-enabled-database?view=sql-server-ver17)   

## Änderung bei neuer Domäne
Hierzu können Sie die Dokumentation [SQL-Server Berechtigungskonzept](sqlserver-berechtigungskonzept.md) anwenden, um entsprechende Änderungen in der Datenbank vorzunehmen.