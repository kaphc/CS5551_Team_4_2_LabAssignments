package com.example.kavinkumar.kavinbags;

import android.content.Intent;
import android.support.annotation.NonNull;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.text.TextUtils;
import android.util.Log;
import android.view.MotionEvent;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;

import java.util.Scanner;

public class MainActivity extends AppCompatActivity {

    FirebaseAuth firebaseAuth;

    EditText login_username, login_password;
    Button login_button;
    TextView direct_to_register;

    String login_username_value, login_password_value;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        firebaseAuth = FirebaseAuth.getInstance();

        login_username = (EditText) findViewById(R.id.login_username);
        login_password = (EditText) findViewById(R.id.login_password);

        login_button = (Button) findViewById(R.id.login_button);

        direct_to_register = (TextView) findViewById(R.id.direct_to_register);

        login_button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                login_username_value = login_username.getText().toString();
                login_password_value = login_password.getText().toString();

                if(login_username_value.equals("")){
                    Toast.makeText(MainActivity.this,"Please Enter Your Email Id",Toast.LENGTH_LONG).show();
                    return;
                }

                if(login_password_value.equals("")){
                    Toast.makeText(MainActivity.this,"Please Enter Your Password",Toast.LENGTH_LONG).show();
                    return;
                }

                firebaseAuth.signInWithEmailAndPassword(login_username_value, login_password_value).addOnCompleteListener(MainActivity.this, new OnCompleteListener<AuthResult>() {
                    @Override
                    public void onComplete(@NonNull Task<AuthResult> task) {
                        if(task.isSuccessful()){
                            Toast.makeText(MainActivity.this,"Logged in Successfully",Toast.LENGTH_LONG).show();
                            finish();

                            Intent intent = new Intent(MainActivity.this, TextScannerActivity.class);
                            startActivity(intent);
                        }

                        else{
                            Toast.makeText(MainActivity.this,"Invalid Username or Password",Toast.LENGTH_LONG).show();
                        }
                    }
                });
            }
        });

        direct_to_register.setOnTouchListener(new View.OnTouchListener() {
            @Override
            public boolean onTouch(View v, MotionEvent event) {
                Intent intent = new Intent(MainActivity.this, RegisterActivity.class);
                startActivity(intent);
                return false;
            }
        });
    }
}
