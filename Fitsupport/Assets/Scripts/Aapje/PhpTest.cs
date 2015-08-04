using UnityEngine;
using System.Collections;
using System;

public class PhpTest : MonoBehaviour {
	IEnumerator Start(){
		WWWForm wwwForm = new WWWForm ();
		wwwForm.AddField ("ValueA", "22");
		wwwForm.AddField ("ValueB", "44");
		
		// Create a download object
		WWW download = new WWW ("http://localhost/Index.php", wwwForm);
		// Wait until the download is done
		yield return download;
		Debug.Log(download.error);
		Debug.Log(download.text);
		
		string[] values = download.text.Split(new char[] {'\n'});
		
		foreach (string value in values)
		{
			if (String.IsNullOrEmpty(value.Trim()))
			{
				continue;
			}
			string[] variable = value.Split (new char[] {'='});
			
			Debug.Log ("PHP data: " + variable[0].Trim() + " = " + variable[1].Trim());
		}
	}
}
