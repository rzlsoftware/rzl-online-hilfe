# Installation mit Datenbank und Dokumentenverwaltung Standard übersiedeln

Diese Anleitung beschreibt, wie Sie eine Installation mit einer bestehenden Datenbank auf einen neuen Server oder ein neues Verzeichnis übersiedeln.

## Dokumentenordner ändern

Standardmäßig befinden sich die Dokumente/Belege in einem Unterordner des Daten-Repositories (z. B. `R:\RZL_DataRepository\RZL_DOKUMENTE`). Sie können den Speicherort anpassen, indem Sie die Datei RZLDb.ini im INI-Ordner des Daten-Repositories bearbeiten.

**Beispiel für die Anpassung:**
```ini
[DMS]
DocumentRoot = D:\RZL\Docs
```
Es sind lokale Laufwerkspfade, Netzlaufwerkspfade und UNC-Pfade möglich.   

**Vorgehen:**   
1. Beenden Sie alle RZL-Programme.   
2. Fügen Sie den Eintrag in der RZLDb.ini hinzu.   
3. Legen Sie den neuen Dokumenten-Ordner an.    
4. Verschieben Sie den Inhalt von ...\RZL_DOKUMENTE in den neuen Ordner.   
5. Testen Sie, ob die Dokumente aus den RZL-Programmen geöffnet werden können.   

## Datenbankserver übersiedeln

1. Laden Sie das [RZL SQL Server Setup](https://rzl.blob.core.windows.net/setups/RZL%20SQL%20Server%20Setup.exe) herunter und installieren sowie konfigurieren Sie den Microsoft SQL Server Express auf dem neuen Server.
2. Sichern Sie die bestehende Datenbank mit dem SQL Server Management Studio.
3. Kopieren Sie die Backupdatei auf den neuen Server.
4. Öffnen Sie die Zentrale Mandantenverwaltung und tragen Sie unter **Hilfsmittel > Einstellungen** im Reiter **Datenbank** unter **SQL-Server (Host)** den neuen Servernamen ein.
5. Stellen Sie die Datenbank auf dem neuen Server mit dem SQL Server Management Studio aus der Sicherung wieder her.
6. Prüfen Sie, ob sich die RZL-Programme (z. B. Finanzbuchhaltung) starten lassen und ob Sie Klienten öffnen können.

## Umstellung auf neue Domäne

1. Legen Sie den lokalen Administrator am SQL Server als Benutzer an und weisen Sie ihm die Serverrolle `sysadmin` zu.
2. Passen Sie vor der Umstellung im KIS/BOARD die Windows-Benutzernamen der KIS-Benutzer an die neue Domäne an.
3. Löschen Sie am SQL Server die Benutzergruppen **Domänen-Benutzer** und **Domänen-Admins** (vor der Umstellung).
4. Legen Sie nach der Umstellung am SQL Server die Anmeldungen **Domänen-Benutzer** und **Domänen-Admins** neu an:
    - **Domänen-Benutzer:** Serverrolle `rzl_server_user`, Datenbankrolle `rzl_user` in der RZL-Datenbank.
    - **Domänen-Admins:** Serverrolle `rzl_server_admin`, Datenbankrolle `rzl_admin`.
    - **Dienstbenutzer (falls vorhanden):** Serverrolle `rzl_server_admin`, Datenbankrolle `rzl_service`.