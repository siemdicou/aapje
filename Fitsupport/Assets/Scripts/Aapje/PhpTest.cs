using UnityEngine;
using System.Collections;
using System;

public class PhpTest : MonoBehaviour {

	public string urlName;
	IEnumerator Start(){
		WWWForm wwwForm = new WWWForm();
		wwwForm.AddField ("ValueA", "1");
		wwwForm.AddField ("ValueB", "2");
		
		// Create a download object
		WWW download = new WWW (urlName, wwwForm);
		// Wait until the download is done
		yield return download;
		//Debug.Log(download.error);
		Debug.Log("Here it comes" + download.text);

		string[] values = download.text.Split(new char[] {'\n'});
		
		foreach (string value in values)
		{
			if (String.IsNullOrEmpty(value.Trim()))
			{
				continue;
			}
			string[] variable = value.Split (new char[] {' '});
			
			Debug.Log ("PHP data: " + variable[0].Trim() + " = " + variable[1].Trim());
		}
	}
}
