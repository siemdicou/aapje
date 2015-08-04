using UnityEngine;
using System.Collections;

public class InputBehaviour : MonoBehaviour {
	private bool keyboardOpen = false;

	public void InsertInformation(){
		if (keyboardOpen == false) {
			keyboardOpen = true;
			TouchScreenKeyboard.Open ("", TouchScreenKeyboardType.Default, false, false, true);
		}
	}
}
